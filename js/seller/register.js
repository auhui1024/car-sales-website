function submitRegister() {
    const user = document.getElementById('sellerUser').value.trim();
    const email = document.getElementById('sellerEmail').value.trim();
    const phone = document.getElementById('sellerPhone').value.trim();
    const pwd = document.getElementById('sellerPwd').value;
    const pwd2 = document.getElementById('sellerPwd2').value;
    const msg = document.getElementById('msg');
    msg.textContent = '';

  
    if (!user) {
        msg.textContent = '用户名不能为空';
        return false;
    }

    if (!email|| !/^\S+@\S+\.\S+$/.test(email)) {
        msg.textContent = '请输入有效的邮箱地址';
        return false;
    }

    if (!phone || !/^1\d{10}$/.test(phone)) {
        msg.textContent = '请输入有效的11位手机号';
        return false;
    }

    if (!pwd) {
        msg.textContent = '密码不能为空';
        return false;
    }
    if (pwd !==pwd2) {
        msg.textContent = '两次输入的密码不一致';
        return false;
    }

    msg.textContent = '注册成功！';
    msg.style.color = 'green';

    return false;
}