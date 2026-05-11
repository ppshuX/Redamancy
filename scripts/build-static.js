/**
 * Vercel「Other」预设需要产出 public/。将根目录静态资源复制到 public/
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public');

function rmrf(dir) {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
}

function copyRecursive(src, dest) {
    const st = fs.statSync(src);
    if (st.isDirectory()) {
        fs.mkdirSync(dest, { recursive: true });
        for (const name of fs.readdirSync(src)) {
            if (name === 'public' || name === 'node_modules' || name === '.git') continue;
            copyRecursive(path.join(src, name), path.join(dest, name));
        }
    } else {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
    }
}

rmrf(outDir);
fs.mkdirSync(outDir, { recursive: true });

const rootFiles = ['index.html', 'style.css', 'data.js', 'README.md'];
for (const f of rootFiles) {
    const p = path.join(root, f);
    if (fs.existsSync(p)) {
        fs.copyFileSync(p, path.join(outDir, f));
    }
}

const handbook = path.join(root, 'handbook');
if (fs.existsSync(handbook)) {
    copyRecursive(handbook, path.join(outDir, 'handbook'));
}

// 页面内链接 historically 与 index 同级（备考计划.md 等），从 handbook/ 拷到 public/ 根目录
for (const name of ['备考计划.md', '知识库大全.md', '二级MS Office超全题库.md']) {
    const src = path.join(handbook, name);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(outDir, name));
    }
}
