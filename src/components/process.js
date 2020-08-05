const process = `
## Following Typical ML pipeline process

![](./docImages/ml_pipeline_01.png)

## 1. Collect data set

    Started with dataset of 170K songs by Spotify.

## 2. Feature engineering

    Clean the dataset, convert string to numeric, filling null, etc..

## 3. Variables selection

    Find the most optimal variables.

## 4. Algorithm selection

    Try with different ML algorithms and tweak hyper parameters for each algorithms.

| Algorithm                  | Description                     |
| -------------------------- | ------------------------------- |
| RandomForestClassification | ![](./docImages/tree_small.png) |
| Neural Network             | ![](./docImages/nn_small.png)   |

    Choose the best performance
    Neural Network (NN) was chosen with the best performance.

![](./docImages/ml_model_selection.png)

## 5. Confusion matrix from NN model

![](./docImages/confusion_matrix.png)

    a. There are many features in the dataset,
    b. The feature for artists is key variable for modeling but not useable.
    c. Misclassifcation between unpopular(Label 0) and unpopular(Label 2) is very rare (Very good!).
    d. This model can provide a good indicator of popularity even without the name of artists.

## 6. Model and scaler are stored as "Trained Model".

![](./docImages/production_pipeline.png)

    Backend link: https://github.com/moz5691/spotify-ml

## Conclusion

### 1. Creating a model takes a lot of effort.

### 2. Feature engineering part is extremely important which allows to start with optimal dataset.

### 3. Any redundant variables yield side effect (high cost of CPU, big memory usage, low accuracy etc..).

### 4. Important to try different ML algorithms.

### 5. Consider computing power and memroy required for the target productoin server.

Source of images: https://www.trainindata.com/

`;

export default process;
