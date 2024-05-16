import requests
from bs4 import BeautifulSoup

query = "반도체"
response = requests.get("https://search.naver.com/search.naver?ssc=tab.news.all&where=news&sm=tab_jum&query=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90")

# Parse HTML content using BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')

# Extract relevant text snippets
links = soup.select('.news_tit')

# Save the results to a text file
with open('C:\\Users\\DC\\Desktop\\vscode_project\\QnA_project\\text.txt', 'a', encoding='utf-8') as file:
    for link in links:
        file.write(link.text + '\n\n')


