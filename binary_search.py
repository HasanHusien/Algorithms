def binary_search(list, target): 
  first = 0
  last = len(list) -1 
  
  while first <= last:
    
    midpoint = (first + last) // 2
    if list[midpoint] == target:
      
      return midpoint
    elif list[midpoint] < target:
      
      first = midpoint + 1
    else:
      
      last = midpoint - 1
  return None

numbers = [1,2,3,4,5,6,7,8,9]

def verify(index):
  if index is not None :
    
    print("the target found at index", index)
  else: 
    
    print("the target not found in the list")
    
result = binary_search(numbers, 12)
verify(result)
