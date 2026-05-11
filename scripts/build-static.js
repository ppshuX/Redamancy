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

// 根发布：纯 ASCII 文件名，避免 CDN/浏览器对中文路径处理异常导致「点 A 打开 B」
// 同时保留中文文件名副本，兼容旧书签与手工输入 URL
const handbookMdToPublic = [
    ['备考计划.md', 'prep-plan.md'],
    ['知识库大全.md', 'knowledge-base.md'],
    ['二级MS Office超全题库.md', 'full-question-bank.md'],
];
for (const [sourceName, destAscii] of handbookMdToPublic) {
    const src = path.join(handbook, sourceName);
    if (!fs.existsSync(src)) continue;
    fs.copyFileSync(src, path.join(outDir, destAscii));
    fs.copyFileSync(src, path.join(outDir, sourceName));
}
