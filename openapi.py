import openpyxl
import openai
from datetime import date
import pandas as pd

start = 3
end = 4
gap = end - start
# F3부터 F198, 그리고 G3부터 G198까지 셀 범위를 문자열로 생성
f_range = [f"F{i}" for i in range(start, end)]  # F3부터 F198까지
g_range = [f"G{i}" for i in range(start, end)]  # G3부터 G198까지

# 두 범위를 합치고 대괄호로 묶어서 출력
full_range = f_range + g_range



def query_and_update_excel(sheet,read_cell, answer_cell):

    # 지정된 셀에서 질문 읽기
    question = "2022년 9월 8일 " + sheet[read_cell].value
    # OpenAI GPT로 질문하고 응답 받기 (업데이트된 API 방식 사용)
    response = openai.ChatCompletion.create(
        model="gpt-4-turbo",
        messages=[{"role": "system", "content": "You are an AI trained by OpenAI."},
                {"role": "user", "content": question}],
        temperature= 0.8, #모델의 출력 다양성
        max_tokens = 1024, # 응답받을 메시지 최대 토큰(단어) 수 설정
        top_p = 1, # 토큰 샘플링 확률을 설정
        frequency_penalty = 0.5, # 일반적으로 나오지 않는 단어를 억제하는 정도
        presence_penalty = 0.5, # 동일한 단어나 구문이 반복되는 것을 억제하는 정도
    )
    
    text = response.choices[0].message['content']
    #sheet[answer_cell].value = text
    value = 0
    for i in range(len(text)-1,0,-1):
        if(text[i] == "+"):
            value = int(text[i+1])
            break
        elif(text[i] == '-'):
            value = int(text[i+1]) * -1
            break 
    # 응답을 지정된 셀에 저장
    sheet[answer_cell].value = text

def save_excel_column_to_txt(file_path, output_path):
    # Load Excel file
    df = pd.read_excel(file_path)
    
    # Extract column A
    cell_data = df.iloc[1, 6:8]  # Assuming column 'A' is the first column
    
    
    # Save the integer data to a text file, each on a new line
    with open(output_path, 'w') as file:
        for value in cell_data:
            file.write(f"{value}\n")


def run():
    openai.api_key = ''
    workbook = openpyxl.load_workbook("C:\\Users\\DC\\Desktop\\vscode_project\\QnA_project\\testqna.xlsx")
    sheet = workbook.active
    #sheet.insert_cols(11)
    #sheet["K2"].value = str(date.today())
    for i in range(gap):
        query_and_update_excel(sheet,full_range[i],full_range[i+gap]) 
    workbook.save("C:\\Users\\DC\\Desktop\\vscode_project\\QnA_project\\testqna.xlsx")
    workbook.close()
    
print("start")
run()
print('end')
# save_excel_column_to_txt("C:\\Users\\DC\\Desktop\\vscode_project\\QnA_project\\testqna.xlsx","C:\\Users\\DC\\Desktop\\vscode_project\\QnA_project\\car.txt")
