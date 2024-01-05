export const transformData = (dt_global) => {
    let wrap_data = []
    // Menggunakan forEach untuk mengambil data array dari index 1
    dt_global.forEach(function (item, index) {
        if (index !== 0) {
            var post = {};
            item.forEach(function (value, i) {
                post[dt_global[0][i]] = value;
            });

            // Menampilkan hasil untuk setiap array
            wrap_data[index] = post
        }
    });
    return wrap_data
}


export const mergedDobledata = (dt_first, dt_second, matc_key1, matc_key2, ...ignores) => {
    let wrap_data = []
    // Menggunakan forEach untuk mengambil data array dari index 1
    dt_first?.forEach(function (df, i_df) {
        dt_second?.forEach(function (ds) {
            if (df[matc_key1] === ds[matc_key2]) {
                const {[matc_key1]: _,  ...new_df} = df
                const {[matc_key2]: __, [ignores]: ____, ...new_ds} = ds
                wrap_data[i_df] = {
                    ...new_df,
                    ...new_ds,
                }
            }
        });
    });
    return wrap_data
}


export const humanDiffTime = (date1, date2) => {
    const diffInMilliseconds = Math.abs(date2 - date1);

    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
    return `${days} ${days === 1 ? 'hari' : 'hari'} yang lalu`;
    } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'jam' : 'jam'} yang lalu`;
    } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'menit' : 'menit'} yang lalu`;
    } else {
    return 'Baru saja';
    }
}