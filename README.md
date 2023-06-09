# Content Generator Web App

This is a web application developed with Django that utilizes Cohere's API to generate high-quality and coherent textual content.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Content Generator Web App is designed to provide users with a seamless solution for generating high-quality written content using Cohere's language model. The application leverages the power of Cohere's API and Django framework to produce articles, blog posts, and other textual content that exhibit accurate grammar, context, and coherence.

## Features
- Easy-to-use interface for generating textual content.
- Integration with Cohere's language model for high-quality output.
- Ability to generate articles, blog posts, and other written content.
- Accurate grammar, context, and coherence in the generated text.
- Customization options for controlling the content generation process.

## Installation
1. Clone the repository: 
```
git clone https://github.com/alaminmagaga/contentgenerator.git
```
3. Navigate to the project directory: 
```
cd contentgenerator
```
5. Create a virtual environment: 
```
python -m venv venv
```
7. Activate the virtual environment:
   - For Windows: 
  ```
  venv\Scripts\activate
  ```
   - For Unix or Linux:
   ```
   source venv/bin/activate
   ```
8. Install the required dependencies: 
```
pip install -r requirements.txt
```
10. Obtain an API key from Cohere and set it as an environment variable
11. Run the application: 
```
python manage.py runserver
```

## Usage
1. Open your web browser and go to: 
```
http://localhost:8000
```
3. Use the user-friendly interface to customize the content generation options.
4. Click the "Generate" button to generate the desired content.
5. The generated text will be displayed on the screen with accurate grammar, context, and coherence.

## Technologies Used
- Django: Python web framework for building the application.
- Python: Programming language used for development.
- Cohere API: Used to access the powerful language model for content generation.
- HTML/CSS: Markup and styling for the web interface.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your modifications and commit them: `git commit -am 'Add some feature'`
4. Push the branch to your forked repository: `git push origin feature-name`
5. Submit a pull request to the original repository.

## License
This project is licensed under the [MIT License](LICENSE).
