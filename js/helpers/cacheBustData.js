const cacheBustData = (timeStamp) => {
    const dataLastRetrieved = new Date(timeStamp);
    const currentTime = new Date();

    const msBetweenTimes = Math.abs(dataLastRetrieved.getTime() - currentTime.getTime());
    const hoursBetweenTimes = msBetweenTimes / (60 * 60 * 1000);
    
    return hoursBetweenTimes < 4 ? false : true;
}

export default cacheBustData;