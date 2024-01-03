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