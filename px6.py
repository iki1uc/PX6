# 6.our Inhalt — PY Stütze
def PX3(x): return x + 3
def PX4(x): return x * 4
def PX6(x): return x ** 6
def SIXOUR(x):
    # 6.our = Layer-0 Dreieck, sofort, nie später
    return {
        "name": "6our",
        "funktion": "Layer-0 Dreieck",
        "sein": True,
        "zen": "ZEN.HALT.40",
        "px6": PX6(PX4(PX3(x)))
    }
