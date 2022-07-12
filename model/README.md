# AI Model Q/A

## How to use me

- Create a virtual environments

  ```powershell
  python -m venv env
  ```

- Activate env

  ```powershell
  env/Scripts/activate
  ```

- Install ipykernel using pip

  ```powershell
  pip install ipykernel
  ```

- Install a new kernel

  ```powershell
  ipython kernel install --user --name=env
  ```

- Install packages from requirements.txt

  ```powershell
  python -m pip install -r requirements.txt
  ```

- Open notebook

  ```powershell
  jupyter notebook
  ```

- Run notebook

  Click `Run All`

- Watch out for 👀

  There two options

  - Convert dot to png by using [onlineconvertfree](https://onlineconvertfree.com/convert-format/dot-to-png/) OR
  - Insert this commands

    `!dot -Tpng tree.dot -o tree.png %matplotlib inline`

- After work is done deactivate env

  ```powershell
  deactivate
  ```

## If you want to use own dataset

Set your file name 📥

```python
  filename = YOUR_DATASET_FILENAME ⬅
  df = pd.read_csv(filename)
  df.head()
```

## How do we compare algorithm

Look at 🎯

Select the algorithm having high mean and low stranded deviation, which is based on f1-score.

## What do we get

Look at 📄

After selecting your model set the model variable.

```python
  model = YOUR_MODEL_NAME ⬅
  dump(model, "model.xz")
```

That will create the model.xz file ready to use

## How to use model.xz

- First you to import joblib package.
- To load model use

  ```python
  model = joblib.load("model.xz")
  ```

- Now you can use model as same as earlier.
