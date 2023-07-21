import requests
from flask import Flask, request, jsonify
import asyncio

app = Flask(_name_)

async def fetch_numbers_from_url(url):
    try:
        response = await asyncio.wait_for(requests.get(url), timeout=0.5)
        if response.status_code == 200:
            data = response.json()
            return data.get("numbers", [])
    except (requests.exceptions.RequestException, asyncio.TimeoutError):
        pass
    return []

async def fetch_all_numbers(urls):
    tasks = [fetch_numbers_from_url(url) for url in urls]
    return await asyncio.gather(*tasks)

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')
    if not urls:
        return jsonify({"numbers": []}), 400

    loop = asyncio.get_event_loop()
    numbers_list = loop.run_until_complete(fetch_all_numbers(urls))
    merged_numbers = sorted(set(number for numbers in numbers_list for number in numbers))
    
    return jsonify({"numbers": merged_numbers})

if _name_ == '_main_':
    app.run(host='0.0.0.0', port=8008)