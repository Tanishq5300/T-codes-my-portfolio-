#WAP of fibbonaci series 

# a= int(input("enter a number :"))
# x=0
# y=1
# if(a==0):
#     print("please enter a valid number :")
# elif(a==1):
#     print(a)
# else:
#     for i in range (a):
#         print(x, end=" ")
#         temp=x
#         x=y
#         y=temp+y


# wAP to reverse a string

# a="101"
# print(a[::-1])

# reverse_text=""
# for i in a:
#     reverse_text=i+reverse_text
# print(reverse_text,end="")

# if(a==reverse_text):
#     print("\nthis a palendrome")
# else:
#     print("\nthis is not a palendrome")

#WAP to check whether the num is prime or not 

# a=input("enter yes or no to continue :")
# b=a.lower()
# while(b=='yes'):
#     num=int(input("enter a number :"))
#     if num>1:
#         for i in range(2,num):
#             if num%i==0:
#                 print("not prime")
#                 break
#         else:
#                 print("prime")
#     else:
#         print("not prime")
#     a=input("enter yes or no to continue :")
#     b=a.lower()
# else:
#      print("thank u for using me")

#WAP to find out the factorials of a number

# num=int(input("enter a number :"))
# fact=1
# for i in range(num,0,-1):
#     fact*=i
#     print(fact)

#WAP of armstrong number in pyhton

# Armstrong number check for a given number

num = int(input("Enter a number: "))
sum = 0
temp = num
order = len(str(num))  # number of digits

while temp > 0:
    digit = temp % 10
    sum += digit ** order
    temp = temp // 10

if sum == num:
    print(num, "is an Armstrong number.")
else:
    print(num, "is not an Armstrong number.")


