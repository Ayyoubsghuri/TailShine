import uuid

def generate_api():
    code = str(uuid.uuid4()).replace('-', '')[:16]
    return code