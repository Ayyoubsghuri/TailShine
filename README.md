
# TailShine README

## Overview
TailShine is a versatile API service that provides users with a suite of tools including image-to-text, QR code reading, grammar checking, WHOIS lookups, translation, and currency exchange functionalities. With our free plan, users can make up to 30,000 requests per month. TailShine is built using Django, Tailwind CSS, SQLite, and React.js.

## Features
- **Image to Text API**: Convert images into text effortlessly.
- **QR Code Reader API**: Decode information from QR codes.
- **Grammar API**: Check and correct grammar in texts.
- **WHOIS API**: Retrieve WHOIS information for domain names.
- **Translation API**: Translate text between multiple languages.
- **Currency Exchange API**: Get real-time currency exchange rates.

## Technology Stack
- **Backend**: Django
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Database**: SQLite

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm 6+

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AyoubSghuri/tailshine.git
   cd tailshine
   ```

2. **Backend Setup:**
   - Create a virtual environment and activate it:
     \`\`\`bash
     python -m venv env
     source env/bin/activate  # On Windows use \`env\Scripts\activate\`
     \`\`\`
   - Install the required packages:
     \`\`\`bash
     pip install -r requirements.txt
     \`\`\`
   - Apply migrations and start the Django server:
     \`\`\`bash
     python manage.py migrate
     python manage.py runserver
     \`\`\`

3. **Frontend Setup:**
   - Navigate to the frontend directory:
     \`\`\`bash
     cd frontend
     \`\`\`
   - Install the required packages:
     \`\`\`bash
     npm install
     \`\`\`
   - Start the React development server:
     \`\`\`bash
     npm start
     \`\`\`

### API Usage

To use the TailShine APIs, include your API key in the request header as follows:
\`\`\`
X-API-KEY: your_api_key_here
\`\`\`

#### Example Request

\`\`\`bash
curl -X GET "https://api.tailshine.com/image-to-text" \
     -H "X-API-KEY: your_api_key_here"
\`\`\`

### Figma Design
You can view the design of the TailShine project on Figma [here](https://www.figma.com/design/YazCxfTdf9EQGFPVECevWJ/TailShine?node-id=1-957&t=VnCsrDkGDuZqOZ9P-1).
