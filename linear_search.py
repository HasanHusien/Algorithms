def linearSearch(list, target):
  """
  Reaturn The Index Posetion Of Target If It's Found Else Return None
  """
  for i in range(0, len(list)): 
    if list[i] == target:
      return i 
  return None

numbers = [1,2,3,4,5,6,7,8,9]

def verify(index):
  if index is not None :
    print("the target found at index", index)
  else: 
    print("the target not found in the list")
    
result = linearSearch(numbers, 12)
verify(result)
        
result = linearSearch(numbers, 9)
verify(result)
        
        