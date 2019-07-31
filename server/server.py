from flask import Flask, render_template, request, jsonify
import sqlite3

# Sets up/connects to DB
conn = sqlite3.connect('resume.db')
c = conn.cursor()


app = Flask(__name__)
app.secret_key = "19Me19Rc9rdweu1yD08iME16D"


try:
    # Message Table
    c.execute('''
	    CREATE TABLE Messages(
            messageID INTEGER PRIMARY KEY,
            name TEXT,
            email TEXT,
            message TEXT,
            sendDateTime TEXT
        )
    ''')

except sqlite3.Error as e:
    print(e)

# Delete all messages
# c.execute('DELETE FROM Messages WHERE 1')
# conn.commit()

@app.route('/contact/submit', methods = ['POST'])
def submitContact():

	data = request.get_json() or request.form

	# Setup DB Connection
	try:
		conn = sqlite3.connect('resume.db')
		c = conn.cursor()
	except sqlite3.Error as e:
		print(e)
		return jsonify(e), 404

	# Insert message into a database
	try:
		c.execute('INSERT INTO Messages(name, email, message, sendDateTime) VALUES("' + 
	    	data['name'] + '", "' + data['email'] + '", "' + data['message'] + 
	    	'", DATETIME("NOW"))')
		conn.commit()
	except sqlite3.Error as e:
		print(e)
		return jsonify(e), 404

	return jsonify('{}'), 202

@app.route('/contact/view', methods = ['GET'])
def viewContact():

	# Setup DB Connection
	try:
		conn = sqlite3.connect('resume.db')
		c = conn.cursor()
	except sqlite3.Error as e:
		print(e)
		return jsonify(e), 404

	# Insert message into a database
	try:
		c.execute('SELECT * FROM Messages ORDER BY sendDateTime ASC')
		info = c.fetchall()
	except sqlite3.Error as e:
		print(e)
		return jsonify(e), 404

	return jsonify(info), 202


if __name__ == '__main__':
    # Runs the application
    app.run()
