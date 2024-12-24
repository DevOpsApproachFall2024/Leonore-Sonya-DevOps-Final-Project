import pytest
import requests
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client
import pytest
from app import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_home_route(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b'Hello! Happy Holidays!' in response.data  # Replace with actual content

def test_informative_route(client):
    response = client.get('/informative')
    assert response.status_code == 200
    assert b'Lesbian Flag' in response.data  # Replace with actual content

def test_queer_people_route(client):
    response = client.get('/queer')
    assert response.status_code == 200
    assert b'YOU' in response.data  # Replace with actual content

def test_tony_route(client):
    response = client.get('/tony')
    assert response.status_code == 200
    assert b'Mariah Carey! Wants Something for Christmas!' in response.data  # Replace with actual content

def test_never_route(client):
    response = client.get('/never')
    assert response.status_code == 200
    assert b'is the previous video is broken? Well...' in response.data  # Replace with actual content

def test_twenty_route(client):
    response = client.get('/20pls')
    assert response.status_code == 200
    assert b'Okay look...' in response.data  # Replace with actual content

# Test for GET request
def test_factorial_page_get(client):
    response = client.get('/factorial')
    assert response.status_code == 200
    assert b'Enter a number' in response.data  # Check if the form is rendered

# Test for POST request with valid input
def test_factorial_page_post_valid(client, mocker):
    # Mock the backend response
    mock_get = mocker.patch('app.requests.get')
    mock_get.return_value.json.return_value = {'factorial': 120}
    mock_get.return_value.status_code = 200

    response = client.post('/factorial', data={'number': '5'})
    assert response.status_code == 200
    assert b'120' in response.data  # Verify the factorial result is displayed

# Test for POST request with invalid input
def test_factorial_page_post_invalid(client):
    response = client.post('/factorial', data={'number': '-5'})
    assert response.status_code == 200
    assert b'Please enter a valid non-negative integer' in response.data
