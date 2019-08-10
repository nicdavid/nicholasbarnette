from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__)
app.secret_key = "19Me19Rc9rdweu1yD08iME16D"


# Sets up the database connection
mydb = mysql.connector.connect(
  host="107.180.41.160",
  user="server_admin",
  passwd="gocoinlygo16!",
  database="resume"
)

c = mydb.cursor()


try:
    # Message Table
    c.execute('''
	    CREATE TABLE Messages(
            messageID INTEGER AUTO_INCREMENT PRIMARY KEY,
            name TEXT,
            email TEXT,
            message TEXT,
            sendDateTime TEXT
        )
    ''')

except Exception as e:
    print(e)

# Delete all messages
# c.execute('DELETE FROM Messages WHERE 1')
# conn.commit()

@app.route('/contact/submit', methods = ['POST'])
def submitContact():

	data = request.get_json() or request.form

	# Setup DB Connection
	try:
		c = mydb.cursor()
	except Exception as e:
		print(e)
		return jsonify(e), 404

	# Insert message into a database
	try:
		query = 'INSERT INTO Messages(name, email, message, sendDateTime) VALUES("' + data['name'] + '", "' + data['email'] + '", "' + data['message'] + '", NOW())'
		c.execute(query)
		mydb.commit()
		c.close()

	except Exception as e:
		c.close()
		print(e)
		return jsonify(e), 404

	return jsonify('{}'), 202

@app.route('/contact/view', methods = ['POST'])
def viewContact():

	data = request.get_json() or request.form

	# Setup DB Connection
	try:
		c = mydb.cursor()
	except Exception as e:
		print(e)
		return jsonify(e), 404

	try:
		query = 'SELECT email, password FROM Users WHERE email="' + data['email'] + '" AND password="' + data['password'] + '"'
		print(query)
		c.execute(query)
		info = c.fetchall()
		print(info)

		if len(info) == 0:
			c.close()
			return jsonify('Access not granted.'), 202

	except Exception as e:
		c.close()
		print(e)
		return jsonify(e), 404


	# Insert message into a database
	try:
		c.execute('SELECT * FROM Messages ORDER BY sendDateTime ASC')
		info = c.fetchall()
		c.close()
	except Exception as e:
		c.close()
		print(e)
		return jsonify(e), 404

	return jsonify(info), 202


if __name__ == '__main__':
    # Runs the application
    app.run()
