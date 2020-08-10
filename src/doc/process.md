## Following Typical ML pipeline process

![](./docImages/ml_pipeline_01.png)

## 1. Collect data set

    Started with dataset of 170K songs by Spotify.

## 2. Feature engineering

    Clean the dataset, convert non-numeric to categorical numeric, scaling or normalization, etc..

## 3. Variables selection

    Find the most optimal variables.  Discard features not improvding accuracy of prediction.
    Exception of artists (name) - a big factor of prediction, but not useable.

## 4. Algorithm selection

    Try with different ML algorithms and tweak hyper parameters for each algorithms.

| Algorithm                  | Description                     |
| -------------------------- | ------------------------------- |
| RandomForestClassification | ![](./docImages/tree_small.png) |
| Neural Network             | ![](./docImages/nn_small.png)   |

    Choose the best performance, however, considering computational and spatial complexity.
    Neural Network (NN) was chosen after all consideration.

![](./docImages/ml_model_selection.png)

## 5. Confusion matrix from NN model

![](./docImages/confusion_matrix.png)

    Misclassifcation between unpopular(Label 0) and unpopular(Label 2) is very rare (Very good!).

## 6. Model and scaler are stored as "Trained Model" or Python package.

![](./docImages/production_pipeline.png)

    Backend link: https://github.com/moz5691/spotify-ml

## Conclusion

### 1. Creating a model takes a lot of effort.

### 2. Feature engineering part is extremely important which allows to start with the most optimal dataset.

### 3. Any redundant variables yield side effect (high cost of CPU, big memory usage, low accuracy etc..).

### 4. Important to try different ML algorithms.

### 5. Make sure target production server can provide CPU/GPU power and memroy required for the chosen model.

Source of images: https://www.trainindata.com/
