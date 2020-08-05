const process = `
## Following Typical ML pipeline process

![](./docImages/ml_pipeline_01.png)

## 1. Collect data set

    Started with 170K songs from Spotify.

## 2. Feature engineering

    Clean the dataset, convert string to numeric, filling null, etc..

## 3. Variable selection

    Find the most optimal variable sets.

## 4. Algorithm selection

    Try with different ML algorithms and tweak hyper parameters

| Algorithm                  | Description                     |
| -------------------------- | ------------------------------- |
| RandomForestClassification | ![](./docImages/tree_small.png) |
| Neural Network             | ![](./docImages/nn_small.png)   |

    Choose the best performance
    Neural Network (NN) was chosen for this applicaiton.

![](./docImages/ml_model_selection.png)

## 5. Confusion matrix from NN model

![](./docImages/confusion_matrix.png)

    a. It was not easy to model it since there are many features in the dataset, and unusable variable of the artists was pretty signification variable for modeling.
    b. Misclassifcation between unpopular(Label 0) and unpopular(Label 2) is very rare (Very good!).
    c. This model can provide a good indicator of popularity even without the name of artists.

## 6. Model and scaler are stored as "Trained Model".

![](./docImages/production_pipeline.png)

## Conclusion

### 1. Creating a model takes a lot of effort. Feature engineering part is extremely important which allows to start with optimal dataset. Any redundant variables yield side effect (high cost of CPU, big memory usage, low accuracy etc..).

### 2. Trying different ML algorithms and consider computing power and memroy required for the target productoin server.

Source of images: https://www.trainindata.com/


`;

export default process;
