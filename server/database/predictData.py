import sys
from joblib import load

filename = "D:/Code/JavaScript/AI/Color-detection/server/database/model.xz"

clf = load(filename)

r = float(sys.argv[1])
g = float(sys.argv[2])
b = float(sys.argv[3])
print(clf.predict([[r, g, b]])[0])
sys.stdout.flush()
