
function login(){
    const a = document.getElementById('login');
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    a.textContent = '';
    a.style.color = '';

    if (!username) {
        a.textContent = '用户名不能为空';
        a.style.color = 'red';
        return false; 
    }
    if (!password) {
        a.textContent = '密码不能为空';
        a.style.color = 'red';
        return false;
    }

    // 4. 校验通过
    a.textContent = '登录成功！';
    a.style.color = 'blue';

    // 阻止表单默认提交（前端验证专用）
    return false;
}