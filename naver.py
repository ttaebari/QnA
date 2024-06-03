import requests
from bs4 import BeautifulSoup

#response == 네이버 기사
#response_2 == 한국경제 기사
#response_3 == 삼성전자 뉴스룸

query = "삼성전자"

with open('C:\\Users\\DC\\Desktop\\vscode_project\\QnA_project\\text.txt', 'a', encoding='utf-8') as file:
    response = requests.get(f"https://search.naver.com/search.naver?ssc=tab.news.all&where=news&sm=tab_jum&query={query}")
    soup = BeautifulSoup(response.text, 'html.parser')
    links = soup.select('.news_tit')  
    for link in links:
            file.write(link.text + '\n')
    
    for num in range(2,4):
        response_3 = requests.get(f'https://news.samsung.com/kr/category/%ea%b8%b0%ec%97%85/page/{num}')
        soup_3 = BeautifulSoup(response_3.text, 'html.parser')
        links_3 = soup_3.select(".title.ellipsis")
        for link_3 in links_3:
            file.write(link_3.text + '\n') 
    # for page in range(1,11):      
    #     response_2 = requests.get(f'https://search.hankyung.com/search/news?query={query}&mediaid_clust=HKPAPER,HKCOM&page={page}') 
    #     soup_2 = BeautifulSoup(response_2.text, 'html.parser')
    #     links_2 = soup_2.select(".tit")
    #     for link_2 in links_2:
    #         file.write(link_2.text + '\n')  
    
