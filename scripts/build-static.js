/**
 * 静态站点构建：将根目录可部署文件写入 build/（Vercel、帽子云等以该目录为站点根）。
 * 可通过环境变量 STATIC_OUTPUT_DIR 覆盖输出目录名。
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, process.env.STATIC_OUTPUT_DIR || 'build');

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
            if (name === 'public' || name === 'build' || name === 'node_modules' || name === '.git') continue;
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
