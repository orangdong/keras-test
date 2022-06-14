const result = document.getElementById('result');
const predictBtn = document.getElementById('predict-btn');

const loadModel = async () => {
    const model = undefined;
    const model = await tf.loadLayersModel('https://raw.githubusercontent.com/orangdong/keras-test/master/model.json');
    console.log("model loaded");
}
loadModel();

predictBtn.addEventListener('click', () => {
    const dummyHotel = [0, 1, 2, 3, 4];
    const dummyUser = [1, 1, 1, 1, 1];
    const data = tf.tensor2d([
        dummyHotel, dummyUser
    ]);
    const output = model.predict(data);
    const prediction = output.dataSync();
    console.log(prediction)
    result.innerHTML = prediction
})