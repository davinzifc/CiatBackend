export module security{

    const rexData:RegExp = /[\(,\)\[\]\;]/;

    export const getDataCleanString = (data: string) => {
        let dataValid = {
            data: data,
            valid: false
        };

        if(!rexData.test(dataValid.data)){
            dataValid.valid = true;
        }

        return dataValid;
    }

}