from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk.stem import SnowballStemmer
from nltk.tokenize import word_tokenize
app = Flask(__name__)


snowball = SnowballStemmer('english')

CORS(app)
def chatbot_response(message):
    print(message)
    tokenized_message = word_tokenize(message)
    
    purified_word = []
    for word in tokenized_message:
        purified_word.append(snowball.stem(word))
    
    if "hello" or "help" or "hi" in message.lower():
        return "Hi there! How can I help you? I can generate some basic walkthroughs for you"
    
    elif "do" or "yes" or "please" in purified_word:
        return "Sure!, You see on top of the screen the navbar you can go to different pages using that, if you want to become a member then choose membership nav link and proceed for the steps mentioned there, other nav links follow the same rule which are basically demostration of how AMAND pune does in different fields"
    
    elif "payment" or "account" or "donation":
        return "Please visit the above nav-links where membership, donations are mentioned and you will be able to make the payment to be a member or to just donate."
    
    else:
        return "Sorry, I don't understand that."

@app.route('/chatbot', methods=['POST'])
def chat():
    print("message revieved")
    data = request.json
    user_message = data.get('message')
    response = chatbot_response(user_message)
    print("sending response")
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(port=5000)  
