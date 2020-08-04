const process = `
## Process and Conclusion

### Following Typical ML pipeline

![](/docImages/ml_pipeline_01.png)

### 1. Collect data set

Started with 170K songs from Spotify.

### 2. Feature engineering

Clean the dataset, convert string to numeric, filling null, etc..

### 3. Variable selection

Find the most optimal variable sets.

### 4. Try with different ML algorithm and tweak hyper parameters

RandomForestClassification
![](./docImages/tree_small.png)

ANN Dense
![](./docImages/nn_small.png)

![](./docImages/ml_model_selection.png)

### Final model's confusion matrix

![](./docImages/confusion_matrix.png)

- It was difficult to model it since a huge factor of popularity is the name of artist.
- Misclassifcation between unpopular(Label 0) and unpopular(Label 2) is very rare.
- This model can provide a good indicator of popularity even without the name of artists.

### Model and scaler are stored as "Trained Model".

![](./docImages/production_pipeline.png)

## Conclusion

### Creating a model takes a lot of effort. Feature engineering part is extremely import to start with optimal dataset. Any redundant variables yield sideeffect (cost of CPU, memory, efficiency etc..).

### Trying different ML algorithms and consider computing power and memroy required for the target productoin server. 

Source of images: TBD

`;

export default process;
