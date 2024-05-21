import pandas as pd

# 엑셀 파일 읽기
file_path = "C:\\Users\\DC\\Desktop\\vscode_project\\QnA_project\\testqna.xlsx" 
df = pd.read_excel(file_path, header=None, usecols=[6, 7], skiprows=2, nrows=30)  # 1열과 2열에서 1행부터 5행까지 읽기
df.columns = ['col1', 'col2']  # 열 이름 지정

# 텍스트 파일에 저장
output_file ="C:\\Users\\DC\\Desktop\\vscode_project\\QnA_project\\detail.txt"
with open(output_file, 'w') as file:
    for index, row in df.iterrows():
        line = f"{row['col1']} {row['col2']}\n"  # 각 열의 데이터를 공백으로 구분하여 한 줄에 저장
        file.write(line)

