function addCar() {
    const model = document.getElementById('carModel').value.trim();
    const price = document.getElementById('carPrice').value.trim();
    const mileage = document.getElementById('carMileage').value.trim();
    const year = document.getElementById('carYear').value.trim();
    const color = document.getElementById('carColor').value.trim();
    const desc = document.getElementById('carDesc').value.trim();
    const image = document.getElementById('carImage').value.trim();
    const msg = document.getElementById('addCarMsg');

    msg.textContent = '';
    msg.style.color = '';

    if (!model) {
        msg.textContent = '请输入车型';
        return false;
    }
    if (!price || isNaN(price) || Number(price) <= 0) {
        msg.textContent = '请输入有效价格';
        return false;
    }
    if (!mileage || isNaN(mileage) || Number(mileage) < 0) {
        msg.textContent = '请输入有效里程';
        return false;
    }
    if (!year || isNaN(year) || Number(year) < 0) {
        msg.textContent = '请输入有效车龄';
        return false;
    }
    if (!color) {
        msg.textContent = '请输入颜色';
        return false;
    }
    if (image && !/^https?:\/\/(.+)$/.test(image)) {
        msg.textContent = '请输入正确的图片URL（以 http:// 或 https:// 开头）';
        return false;
    }

    msg.textContent = '添加车辆成功！';
    msg.style.color = '#16a34a';

    // 1) 如果需要持久化，可以改为调用后端接口，这里示例保存localStorage
    const cars = JSON.parse(localStorage.getItem('carList') || '[]');
    cars.push({ model, price: Number(price), mileage: Number(mileage), year: Number(year), color, desc, image, createdAt: new Date().toISOString() });
    localStorage.setItem('carList', JSON.stringify(cars));

    // 2) 清空表单
    document.getElementById('carModel').value = '';
    document.getElementById('carPrice').value = '';
    document.getElementById('carMileage').value = '';
    document.getElementById('carYear').value = '';
    document.getElementById('carColor').value = '';
    document.getElementById('carDesc').value = '';
    document.getElementById('carImage').value = '';

    return false;
}
