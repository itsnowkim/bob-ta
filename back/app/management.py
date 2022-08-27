def construct_table():
  starttime_list = [9, 10.5, 12, 13.5, 15, 16.5, 18, 19.5]
  endtime_list = [10.25, 11.75, 13.25, 14.75, 16.25, 17.75, 19.25, 20.75]
  default_table = {
    '월':[],
    '화':[],
    '수':[],
    '목':[],
    '금':[]
  }

  for daytime in default_table:
    for idx in range(8):
      default_table[daytime].append(f'{starttime_list[idx]}-{endtime_list[idx]}')
  
  return default_table


def first_person(data):  
  output = construct_table()

  # print(default)
  # default에서 제거해가면서 output 찾기
  
  for key in data:
    for classtime in data[key]:
      if classtime in output[key]:
        output[key].remove(classtime)

  return output