from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)


CORS(app)
def chatbot_response(message):
    
    if "hello" or "help" or "hi" in message.lower():
        return "Hi there! How can I help you? I can generate some basic walkthroughs for you"
    
    else:
        return "Sorry, I don't understand that."

@app.route('/chatbot', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    response = chatbot_response(user_message)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(port=5000)  
