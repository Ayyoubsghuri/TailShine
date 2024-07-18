# TailShine - API Project

Welcome to **TailShine**, a comprehensive API service platform designed to provide developers with essential tools to enhance their applications. With TailShine, you can access a variety of APIs for free, with a limit of 30,000 requests per month on the free plan.


![alt text](https://github.com/AyoubSghuri/TailShine/blob/main/TailSHINE_Frontend/src/images/logoinwhite.png)
## Features

- **API Image to Text**: Convert images to text effortlessly.
- **API QR Code Reader**: Decode QR codes to text.
- **API Grammar**: Check and correct grammar in your text.
- **API WHOIS**: Retrieve WHOIS information for domain names.
- **API Translate**: Translate text between different languages.
- **API Currency Exchange**: Get real-time currency exchange rates.

## Project (Home screen) 
![alt text](https://github.com/AyoubSghuri/TailShine/blob/main/TailSHINE_Frontend/screenshot.png)

## Technologies Used

- **Backend**: Django REST framework
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Database**: SQLite

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 14+
- SQLite

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AyoubSghuri/tailshine.git
    cd tailshine
    ```

2. Set up the backend:
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py createsuperuser
    python manage.py runserver
    ```

3. Set up the frontend:
    ```bash
    cd ../TailSHINE_Frontend
    npm install
    npm start
    ```

### Usage

1. Sign up on TailShine.
2. Access the dashboard to get your API key.
3. Use the following headers for API requests:
    ```http
    X-API-KEY: your_api_key_here
    ```

### Example Requests

- **Image to Text**:
    ```python
    import requests

    url = "http://localhost:8000/api/image-to-text"
    headers = {"X-API-KEY": "your_api_key_here"}
    files = {"file": open("image.png", "rb")}

    response = requests.post(url, headers=headers, files=files)
    print(response.json())
    ```

- **QR Code Reader**:
    ```python
    import requests

    url = "http://localhost:8000/api/qr-code-reader"
    headers = {"X-API-KEY": "your_api_key_here"}
    files = {"file": open("qrcode.png", "rb")}

    response = requests.post(url, headers=headers, files=files)
    print(response.json())
    ```

- **Grammar Check**:
    ```python
    import requests

    url = "http://localhost:8000/api/grammar-check"
    headers = {"X-API-KEY": "your_api_key_here"}
    data = {"text": "Your text goes here"}

    response = requests.post(url, headers=headers, data=data)
    print(response.json())
    ```

## Figma design

visit [Figma link](https://www.figma.com/design/YazCxfTdf9EQGFPVECevWJ/TailShine?node-id=1-957&t=VnCsrDkGDuZqOZ9P-1).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to all the contributors and supporters who helped in the development of TailShine.

---

Created by: Ayyoub Sghuri
Promotion of: 2020/2022
