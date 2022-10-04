import mongoose from 'mongoose'

const Connection = async () => {

    const URL = `mongodb://user:vivek@ac-vxoj6zt-shard-00-00.onjgxh9.mongodb.net:27017,ac-vxoj6zt-shard-00-01.onjgxh9.mongodb.net:27017,ac-vxoj6zt-shard-00-02.onjgxh9.mongodb.net:27017/?ssl=true&replicaSet=atlas-bejira-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;
