import turtle
import time

wr = turtle.Turtle()

wr.fillcolor('red')

wr.begin_fill()

wr.left(140)
wr.forward(113)

for i in range(200):
    wr.right(1)
    wr.forward(1)
wr.left(120)

for i in range(200):
    wr.right(1)
    wr.forward(1)
wr.forward(112)
wr.end_fill
time.sleep(100)
wr.ht()