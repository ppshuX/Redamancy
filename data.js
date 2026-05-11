// 题库数据
const questionBank = {
    "📖 算法基础": [
        { question: "算法的四个基本特征是什么？", answer: "① 可行性：算法中的每个步骤都必须是可以执行的<br>② 确定性：每个步骤都有明确的定义，不允许歧义<br>③ 有穷性：算法必须在有限时间内完成<br>④ 拥有足够的情报：有输入和输出" },
        { question: "算法的时间复杂度是指？", answer: "算法在执行过程中所需要的基本运算次数<br>（注意：不是执行时间，而是计算工作量）" },
        { question: "算法的空间复杂度是指？", answer: "算法在执行过程中所需要的计算机存储空间<br>包括：程序所占空间 + 输入数据空间 + 额外空间" },
        { question: "常见时间复杂度从低到高的排序？", answer: "O(1)常数阶 < O(log₂n)对数阶 < O(n)线性阶 < O(nlog₂n)线性对数阶 < O(n²)平方阶 < O(2ⁿ)指数阶" },
        { question: "时间复杂度为O(1)表示什么？", answer: "算法的执行时间是一个常数，与问题规模无关" },
        { question: "时间复杂度为O(n)表示什么？", answer: "算法的执行时间与问题规模n成正比<br>（线性增长）" },
        { question: "时间复杂度为O(n²)表示什么？", answer: "执行时间与n²成正比<br>（常见于双重循环，如冒泡排序）" }
    ],
    "📊 数据结构": [
        { question: "数据结构分为哪两种角度分类？", answer: "① 逻辑结构：数据元素之间的逻辑关系<br>② 存储结构（物理结构）：数据在计算机中的存储方式" },
        { question: "数据的四种逻辑结构？", answer: "① 集合：同属一个集合，无其他关系<br>② 线性结构：一对一关系（如线性表）<br>③ 树形结构：一对多关系<br>④ 图形结构：多对多关系" },
        { question: "常见的四种存储结构？", answer: "① 顺序存储：连续存储单元<br>② 链式存储：用指针连接<br>③ 索引存储：建立索引表<br>④ 散列存储：根据关键字计算地址" },
        { question: "线性表的特点？", answer: "① 只有一个根结点（无前件）<br>② 只有一个终端结点（无后件）<br>③ 其他结点只有一个前件和一个后件" },
        { question: "顺序存储和链式存储的优缺点？", answer: "顺序存储：可随机存取，但插入删除需移动大量元素<br>链式存储：插入删除方便，但不能随机存取" },
        { question: "线性表是哪种结构？", answer: "线性结构（一对一关系）<br>注意：栈、队列、线性链表都是线性结构！" }
    ],
    "📚 栈和队列": [
        { question: "栈的特点是什么？", answer: "先进后出（FILO / Last In First Out）<br>或后进先出（LIFO）" },
        { question: "栈顶和栈底分别是什么？", answer: "栈顶：允许插入和删除的一端<br>栈底：不允许插入和删除的一端" },
        { question: "队列的特点是什么？", answer: "先进先出（FIFO / First In First Out）" },
        { question: "队尾和队头分别是什么？", answer: "队尾：允许插入的一端<br>队头：允许删除的一端" },
        { question: "循环队列的队空条件？", answer: "front = rear（队头指针 = 队尾指针）" },
        { question: "循环队列的队满条件？", answer: "(rear + 1) % maxsize = front" },
        { question: "入栈序列为abcde，可能的出栈序列是？", answer: "可能的：edcba、abcde、dcbae等<br>不可能的：decba（e先出则abd已全部入栈，出栈只能是edcba）" }
    ],
    "🌳 树和二叉树": [
        { question: "二叉树的重要性质：叶子结点和度为2的结点关系？", answer: "叶子结点数 = 度为2的结点数 + 1<br>即：n₀ = n₂ + 1" },
        { question: "深度为k的二叉树最多有多少个结点？", answer: "2^k - 1 个结点（满二叉树）" },
        { question: "深度为k的第k层最多有多少个结点？", answer: "2^(k-1) 个结点" },
        { question: "完全二叉树的深度公式？", answer: "⌊log₂n⌋ + 1<br>（向下取整后加1）" },
        { question: "前序遍历的顺序？", answer: "根 → 左 → 右<br>（先访问根，再遍历左子树，最后遍历右子树）" },
        { question: "中序遍历的顺序？", answer: "左 → 根 → 右<br>（先遍历左子树，再访问根，最后遍历右子树）" },
        { question: "后序遍历的顺序？", answer: "左 → 右 → 根<br>（先遍历左子树，再遍历右子树，最后访问根）" },
        { question: "深度为5的满二叉树有多少个结点？", answer: "2⁵ - 1 = 31个结点" },
        { question: "深度为5的满二叉树有多少个叶子结点？", answer: "2^(5-1) = 16个叶子结点<br>（第k层最多有2^(k-1)个结点）" }
    ],
    "🔍 查找和排序": [
        { question: "顺序查找的时间复杂度？", answer: "O(n)<br>对存储结构无要求，适合无序表" },
        { question: "二分查找的时间复杂度？", answer: "O(log₂n)<br>要求：线性表是有序的顺序存储" },
        { question: "冒泡排序最坏情况比较次数？", answer: "n(n-1)/2 次<br>（也是交换次数）" },
        { question: "冒泡排序的时间复杂度？", answer: "平均和最坏都是 O(n²)<br>是稳定的排序算法" },
        { question: "快速排序的时间复杂度？", answer: "平均：O(nlog₂n)<br>最坏（有序时）：O(n²)<br>是不稳定的排序算法" },
        { question: "堆排序的时间复杂度？", answer: "O(nlog₂n)<br>最坏情况也是O(nlog₂n)<br>是不稳定的排序算法" },
        { question: "哪些排序算法是稳定的？", answer: "稳定排序：冒泡排序、归并排序、插入排序<br>不稳定：快速排序、选择排序、希尔排序、堆排序" },
        { question: "最坏情况下比较次数最少的是？", answer: "堆排序<br>因为O(nlog₂n)比其他O(n²)的排序少" }
    ],
    "💻 程序设计": [
        { question: "结构化程序设计的三种基本结构？", answer: "① 顺序结构<br>② 选择结构（分支结构）<br>③ 循环结构" },
        { question: "面向对象的三大特性？", answer: "① 封装：隐藏内部细节<br>② 继承：子类继承父类<br>③ 多态：同一操作不同表现" },
        { question: "封装的作用是？", answer: "实现信息隐蔽<br>隐藏对象的内部细节，只对外提供接口" },
        { question: "一个类可以定义几个对象？", answer: "可以定义多个对象（实例）" },
        { question: "结构化程序设计的核心思想？", answer: "① 自顶向下<br>② 逐步求精<br>③ 模块化<br>④ 限制使用goto语句" }
    ],
    "🏗️ 软件工程": [
        { question: "软件测试的目的是？", answer: "发现错误<br>而不是证明程序是正确的！" },
        { question: "软件测试的步骤顺序？", answer: "单元测试 → 集成测试 → 确认测试 → 系统测试" },
        { question: "黑盒测试和白盒测试的区别？", answer: "黑盒测试（功能测试）：不考虑内部逻辑，只测功能<br>白盒测试（结构测试）：考虑内部逻辑" },
        { question: "模块独立性的两个指标？", answer: "① 耦合性：模块间依赖程度（目标：低耦合）<br>② 内聚性：模块内部结合程度（目标：高内聚）" },
        { question: "软件维护中占比最大的是？", answer: "完善性维护（50-60%）<br>用于增强功能" },
        { question: "软件生命周期的三个时期？", answer: "① 软件定义期：问题定义、可行性研究、需求分析<br>② 软件开发期：概要设计、详细设计、编码、测试<br>③ 软件维护期：使用和维护" },
        { question: "软件按功能分为哪三类？", answer: "① 应用软件<br>② 系统软件<br>③ 支撑软件（工具软件）" }
    ],
    "🗄️ 数据库基础": [
        { question: "数据库系统的核心是？", answer: "数据库管理系统（DBMS）" },
        { question: "E-R图中三种图形分别表示什么？", answer: "矩形：实体<br>椭圆：属性<br>菱形：联系" },
        { question: "关系表中的一行叫什么？", answer: "元组（记录）" },
        { question: "关系表中的一列叫什么？", answer: "属性（字段）" },
        { question: "主键的作用？", answer: "唯一标识元组的属性或属性组<br>主键值不能重复也不能为空" },
        { question: "E-R图转换为关系模型的规则？", answer: "① 1:1联系：可合并到任意一端<br>② 1:n联系：合并到n端<br>③ m:n联系：必须转换为独立关系模式" },
        { question: "关系的基本运算？", answer: "① 选择（σ）：选取满足条件的元组（行）<br>② 投影（π）：选择若干属性列（列）<br>③ 连接（∞）：拼接两个关系" },
        { question: "数据库设计包括哪两个方面？", answer: "① 概念设计（用E-R图）<br>② 逻辑设计（转换为关系模型）" },
        { question: "层次模型用什么结构表示？", answer: "树状结构<br>每个结点只有一个父结点" },
        { question: "关系数据库用什么表示联系？", answer: "二维表" }
    ],
    "📝 Word基础": [
        { question: "用于查看打印效果的视图是？", answer: "页面视图<br>显示与实际打印效果一致的文档" },
        { question: "Word中，粘贴的快捷键？", answer: "Ctrl + V" },
        { question: "Word中，加粗的快捷键？", answer: "Ctrl + B" },
        { question: "Word中，居中对齐的快捷键？", answer: "Ctrl + E" },
        { question: "Word中，两端对齐的快捷键？", answer: "Ctrl + J" },
        { question: "样式是指什么？", answer: "字符格式和段落格式的集合<br>可以快速统一设置文本格式" },
        { question: "首行缩进2字符在哪里设置？", answer: "在\"段落\"对话框中设置<br>特殊格式 → 首行缩进 → 2字符" },
        { question: "分节符的作用是？", answer: "将文档分成若干节，每节可以有不同的页面设置<br>类型：下一页、连续、偶数页、奇数页" },
        { question: "如何使文档从第3页开始编页码？", answer: "① 在第2页末尾插入分节符（下一页）<br>② 取消\"链接到前一条页眉\"<br>③ 设置页码格式，起始页码为1" },
        { question: "自动生成目录的前提是？", answer: "必须先为标题设置标题样式（标题1、标题2...）" },
        { question: "邮件合并的三个组成部分？", answer: "① 主文档（如邀请函）<br>② 数据源（如Excel表格）<br>③ 合并域（插入占位符）" }
    ],
    "📊 Excel基础": [
        { question: "Excel的绝对引用符号是？", answer: "$（美元符号）<br>如$A$1，按F4键快速切换" },
        { question: "相对引用和绝对引用的区别？", answer: "相对引用：复制时引用会随位置变化<br>绝对引用：复制时引用不变<br>混合引用：$A1或A$1" },
        { question: "Excel的数据类型包括？", answer: "① 数值型（可计算）<br>② 文本型（左对齐）<br>③ 日期时间型<br>④ 逻辑型<br>⑤ 错误值" },
        { question: "设置单元格格式的快捷键？", answer: "Ctrl + 1" },
        { question: "VLOOKUP函数的语法？", answer: "=VLOOKUP(查找值, 查找区域, 返回列数, 匹配方式)<br>第四参数：FALSE精确匹配，TRUE模糊匹配<br>注意：查找值必须在区域第一列！" },
        { question: "INDEX和MATCH组合的优点？", answer: "比VLOOKUP更灵活，可以从右向左查找<br>=INDEX(返回列, MATCH(查找值, 查找列, 0))" },
        { question: "COUNT和COUNTA的区别？", answer: "COUNT：只计数包含数值的单元格<br>COUNTA：计数非空单元格（包括文本）" },
        { question: "条件格式的作用是？", answer: "根据单元格的值自动设置格式<br>如：大于60的显示红色" },
        { question: "冻结窗格的作用是？", answer: "固定行或列，方便查看大型表格<br>选项：冻结首行、冻结首列、冻结拆分窗格" }
    ],
    "📈 Excel函数": [
        { question: "SUMIF函数的语法？", answer: "=SUMIF(条件区域, 条件, 求和区域)<br>示例：=SUMIF(A1:A10,\">60\",B1:B10)" },
        { question: "COUNTIF函数的语法？", answer: "=COUNTIF(区域, 条件)<br>示例：=COUNTIF(A1:A10,\">=60\")" },
        { question: "IF函数的语法？", answer: "=IF(条件, 真值, 假值)<br>示例：=IF(A1>=60,\"及格\",\"不及格\")" },
        { question: "AND函数和OR函数的区别？", answer: "AND：所有条件都为真才返回TRUE<br>OR：任一条件为真就返回TRUE" },
        { question: "LEFT/RIGHT/MID函数的区别？", answer: "LEFT：从文本左侧截取<br>RIGHT：从文本右侧截取<br>MID：从文本中间截取" },
        { question: "TRIM函数的作用是？", answer: "删除文本中多余的空格<br>（保留单词间的单个空格）" },
        { question: "LEN函数的作用是？", answer: "返回文本的字符个数" },
        { question: "TODAY函数和NOW函数的区别？", answer: "TODAY()：返回当前日期<br>NOW()：返回当前日期和时间" },
        { question: "DATEDIF函数的作用是？", answer: "计算两个日期之间的差值<br>=DATEDIF(开始日期, 结束日期, \"单位\")<br>单位：\"Y\"年、\"M\"月、\"D\"日" },
        { question: "AVERAGEIF函数的作用是？", answer: "对满足条件的单元格求平均值<br>=AVERAGEIF(区域, 条件, 平均区域)" }
    ],
    "🔄 数据管理": [
        { question: "使用分类汇总前必须先做什么？", answer: "必须先按分类字段排序！<br>否则分类汇总结果会不正确" },
        { question: "数据透视表的四个区域？", answer: "① 筛选器<br>② 列<br>③ 行<br>④ 值" },
        { question: "数据透视表值字段的默认汇总方式？", answer: "求和<br>（可以改为计数、平均值、最大值等）" },
        { question: "排序时\"数据包含标题\"的作用？", answer: "勾选后，第一行会被当作标题行<br>排序时不会被移动" },
        { question: "高级筛选中条件区域的设置规则？", answer: "同一行：条件是\"与\"的关系<br>不同行：条件是\"或\"的关系" },
        { question: "数据验证（下拉列表）在哪里设置？", answer: "数据选项卡 → 数据工具组 → 数据验证<br>验证条件选择\"序列\"" },
        { question: "分类汇总的汇总方式有哪些？", answer: "求和、计数、平均值、最大值、最小值、乘积等" }
    ],
    "📊 图表和透视表": [
        { question: "柱形图适用于什么场景？", answer: "比较各类别数据的大小" },
        { question: "折线图适用于什么场景？", answer: "显示数据随时间变化的趋势" },
        { question: "饼图适用于什么场景？", answer: "显示各部分占总体的比例" },
        { question: "创建数据透视表的步骤？", answer: "① 选中数据源（含标题）<br>② 插入 → 数据透视表<br>③ 拖动字段到四个区域" },
        { question: "如何更改数据透视表的值汇总方式？", answer: "右键值区域 → 值字段设置<br>选择汇总方式（求和、计数、平均值等）" },
        { question: "迷你图是什么？", answer: "工作表单元格中的微型图表<br>类型：折线图、柱形图、盈亏图" },
        { question: "组合图的特点是？", answer: "两种图表类型组合<br>如：柱形图+折线图<br>用于同时展示不同类型的数据" }
    ],
    "📽️ PPT基础": [
        { question: "统一设置幻灯片格式的视图是？", answer: "母版视图<br>可以统一设置背景、字体、占位符等" },
        { question: "新建幻灯片的快捷键？", answer: "Ctrl + M" },
        { question: "复制幻灯片的快捷键？", answer: "Ctrl + D" },
        { question: "PPT的四种视图方式？", answer: "① 普通视图（默认）<br>② 幻灯片浏览视图<br>③ 阅读视图<br>④ 母版视图" },
        { question: "从第一张开始放映的快捷键？", answer: "F5" },
        { question: "从当前幻灯片开始放映的快捷键？", answer: "Shift + F5" },
        { question: "退出放映的快捷键？", answer: "Esc" },
        { question: "在母版中插入Logo会影响哪些幻灯片？", answer: "影响所有基于该母版的幻灯片<br>（这是统一格式的优势）" },
        { question: "隐藏幻灯片后在编辑状态可见吗？", answer: "可见！<br>隐藏只是放映时不显示" }
    ],
    "✨ PPT动画": [
        { question: "动画的四种类型？", answer: "① 进入动画：对象出现效果<br>② 强调动画：突出显示效果<br>③ 退出动画：对象离开效果<br>④ 动作路径：沿路径移动" },
        { question: "动画的三种开始方式？", answer: "① 单击开始<br>② 与上一个动画同时<br>③ 上一个动画之后" },
        { question: "设置切换效果在哪里？", answer: "切换选项卡<br>→ 切换到此幻灯片组" },
        { question: "切换效果可以设置哪些内容？", answer: "① 切换声音<br>② 持续时间<br>③ 换片方式（单击/自动换片）" },
        { question: "插入超链接的快捷键？", answer: "Ctrl + K" },
        { question: "超链接可以链接到哪些内容？", answer: "① 现有文件或网页<br>② 本文档中的位置（幻灯片）<br>③ 新建文档<br>④ 电子邮件地址" },
        { question: "动作按钮可以链接到？", answer: "下一张、上一张、第一张、最后一张幻灯片<br>结束放映、其他文件、URL等" }
    ],
    "⌨️ Office快捷键": [
        { question: "新建文档的快捷键？", answer: "Ctrl + N" },
        { question: "保存文档的快捷键？", answer: "Ctrl + S" },
        { question: "另存为的快捷键？", answer: "F12" },
        { question: "打印的快捷键？", answer: "Ctrl + P" },
        { question: "撤销的快捷键？", answer: "Ctrl + Z" },
        { question: "恢复/重做的快捷键？", answer: "Ctrl + Y" },
        { question: "查找的快捷键？", answer: "Ctrl + F" },
        { question: "替换的快捷键？", answer: "Ctrl + H" },
        { question: "Excel自动求和的快捷键？", answer: "Alt + =" },
        { question: "Excel快速移动到数据边缘的快捷键？", answer: "Ctrl + 方向键" },
        { question: "Excel在多个单元格输入相同内容的快捷键？", answer: "选中多个单元格后，输入内容按 Ctrl + Enter" },
        { question: "Word插入分页符的快捷键？", answer: "Ctrl + Enter" },
        { question: "Excel输入当前日期的快捷键？", answer: "Ctrl + ;" },
        { question: "Excel输入当前时间的快捷键？", answer: "Ctrl + Shift + ;" }
    ],
    "📋 文件格式": [
        { question: "Word 2016的默认文档扩展名？", answer: ".docx" },
        { question: "Word启用宏的文档扩展名？", answer: ".docm" },
        { question: "Word模板文件扩展名？", answer: ".dotx" },
        { question: "Excel工作簿的扩展名？", answer: ".xlsx" },
        { question: "Excel启用宏的工作簿扩展名？", answer: ".xlsm" },
        { question: "PPT演示文稿的扩展名？", answer: ".pptx" },
        { question: "PPT放映文件的扩展名？", answer: ".ppsx" },
        { question: "如何打印不连续的页面？", answer: "用逗号分隔不连续页，用连字符表示连续页<br>如：1,3,5-7" }
    ],
    "🧩 Word操作流程": [
        { question: "Word操作题拿到文件后先做什么？", answer: "先通读题目要求，圈出所有评分点；再保存副本，确认文件名和保存路径符合要求。" },
        { question: "自动目录题的标准流程？", answer: "① 给各级标题应用标题1/标题2样式<br>② 修改样式格式而不是手动改每个标题<br>③ 引用 → 目录 → 自动目录<br>④ 完成后更新整个目录" },
        { question: "分节页码题的关键步骤？", answer: "① 在上一部分末尾插入分节符<br>② 进入页眉页脚，取消链接到前一节<br>③ 设置页码格式和起始页码<br>④ 检查每节页眉页脚是否独立" },
        { question: "邮件合并题的完整步骤？", answer: "① 打开主文档<br>② 选择收件人并连接Excel数据源<br>③ 插入合并域<br>④ 预览结果<br>⑤ 完成并合并到新文档或打印" },
        { question: "图片和图文混排题常查什么？", answer: "图片大小、位置、文字环绕方式、对齐方式、边框效果、题注编号、图片压缩和替换。" },
        { question: "表格题常见评分点？", answer: "插入或调整行列、合并拆分单元格、表格样式、边框底纹、对齐方式、标题行重复、公式计算。" },
        { question: "Word最后检查清单？", answer: "目录是否更新、页码是否正确、标题样式是否统一、图片是否跑版、文件是否按要求保存。" }
    ],
    "🧮 Excel操作训练": [
        { question: "Excel操作题的推荐顺序？", answer: "先整理数据区域和标题，再做公式函数，然后做排序筛选/分类汇总/透视表，最后做图表和格式。" },
        { question: "写公式前要检查什么？", answer: "确认数据区域、标题行、相对/绝对引用、是否要向下填充、是否包含空值或文本数字。" },
        { question: "VLOOKUP题最容易错在哪里？", answer: "查找值必须在查找区域第一列；返回列序号从区域第一列开始数；精确匹配用FALSE或0。" },
        { question: "SUMIF/COUNTIF题的核心区别？", answer: "SUMIF按条件求和；COUNTIF按条件计数。SUMIF有条件区域和求和区域，COUNTIF只有区域和条件。" },
        { question: "分类汇总题的必要前置步骤？", answer: "必须先按分类字段排序，再执行数据 → 分类汇总；否则同一类别可能被拆成多组。" },
        { question: "数据透视表题怎么减少失误？", answer: "选中完整数据源含标题；字段按题目要求放入行、列、值、筛选区域；检查值字段汇总方式和数字格式。" },
        { question: "图表题最后要检查哪些元素？", answer: "图表类型、标题、坐标轴标题、图例位置、数据标签、系列格式、图表位置和大小。" },
        { question: "Excel最后检查清单？", answer: "公式是否填充完整、引用是否锁定、筛选条件是否正确、透视表是否刷新、图表是否使用正确数据源。" }
    ],
    "🎞️ PPT操作训练": [
        { question: "PPT操作题的推荐顺序？", answer: "先看全局要求，再改母版和主题；随后处理单页内容，最后设置动画、切换、超链接和放映。" },
        { question: "母版题的核心判断？", answer: "题目要求所有幻灯片统一出现的元素，应优先在幻灯片母版中设置，不要逐页手动复制。" },
        { question: "动画题要检查哪三项？", answer: "动画对象是否正确、动画类型是否正确、开始方式/持续时间/延迟/顺序是否符合要求。" },
        { question: "切换和动画有什么区别？", answer: "切换是幻灯片之间的过渡效果；动画是幻灯片内对象的出现、强调、退出或路径效果。" },
        { question: "超链接和动作按钮常链接到哪里？", answer: "可以链接到指定幻灯片、文件、网页、电子邮件，也可以设置返回、下一张、结束放映等动作。" },
        { question: "PPT最后检查清单？", answer: "母版是否生效、版式是否正确、动画顺序是否正确、隐藏幻灯片是否按要求、放映方式是否设置。" }
    ],
    "🧪 模拟选择题": [
        { question: "下列关于算法的叙述正确的是？<br>A. 算法就是程序<br>B. 算法必须有穷<br>C. 算法只需要输入不需要输出<br>D. 算法复杂度与数据量无关", answer: "答案：B<br>解析：算法具有有穷性，并且至少有一个输出。程序是算法的实现，不等于算法本身。" },
        { question: "下列结构中属于线性结构的是？<br>A. 二叉树<br>B. 图<br>C. 队列<br>D. 树", answer: "答案：C<br>解析：队列是受限的线性表，属于线性结构。" },
        { question: "在E-R图中，表示联系通常使用？<br>A. 矩形<br>B. 椭圆<br>C. 菱形<br>D. 直线", answer: "答案：C<br>解析：实体用矩形，属性用椭圆，联系用菱形。" },
        { question: "Word中自动生成目录的前提是？<br>A. 手动输入目录文字<br>B. 设置标题样式<br>C. 设置页边距<br>D. 插入分页符", answer: "答案：B<br>解析：自动目录依赖标题1、标题2等标题样式。" },
        { question: "Excel中固定查找区域A2:D20，应写成？<br>A. A2:D20<br>B. $A$2:$D$20<br>C. A$2:D20<br>D. $A2:D$20", answer: "答案：B<br>解析：行列都固定时，列标和行号前都要加$。" },
        { question: "创建数据透视表时，字段通常拖入哪四个区域？<br>A. 标题、正文、页脚、批注<br>B. 行、列、值、筛选器<br>C. 字体、段落、样式、主题<br>D. 动画、切换、放映、审阅", answer: "答案：B<br>解析：数据透视表的核心区域是行、列、值、筛选器。" },
        { question: "PPT中从当前幻灯片开始放映的快捷键是？<br>A. F5<br>B. Shift + F5<br>C. Ctrl + M<br>D. Ctrl + K", answer: "答案：B<br>解析：F5从头放映，Shift+F5从当前幻灯片放映。" },
        { question: "软件测试的主要目的是？<br>A. 证明程序完全正确<br>B. 发现错误<br>C. 编写需求说明<br>D. 生成数据库", answer: "答案：B<br>解析：软件测试的目的是尽可能发现错误。" }
    ]
};

// 选择题题库
const choiceExamBank = [
    { id: 'choice-001', category: '公共基础', question: '算法的有穷性是指？', options: ['算法必须包含循环', '算法必须在有限步骤内结束', '算法必须有多个输入', '算法只能用程序实现'], answer: 'B', explanation: '有穷性表示算法必须在有限时间或有限步骤内完成。' },
    { id: 'choice-002', category: '公共基础', question: '下列属于线性结构的是？', options: ['二叉树', '图', '队列', '树'], answer: 'C', explanation: '队列是受限的线性表，属于线性结构。' },
    { id: 'choice-003', category: '公共基础', question: '栈的操作特点是？', options: ['先进先出', '后进先出', '随机进出', '只进不出'], answer: 'B', explanation: '栈是后进先出，也可称先进后出。' },
    { id: 'choice-004', category: '公共基础', question: '深度为5的满二叉树共有多少个结点？', options: ['16', '31', '32', '63'], answer: 'B', explanation: '深度为m的满二叉树结点数为2^m - 1，2^5 - 1 = 31。' },
    { id: 'choice-005', category: '公共基础', question: '二分查找的前提条件是？', options: ['线性表必须有序且顺序存储', '线性表必须无序', '必须使用链式存储', '必须使用树形结构'], answer: 'A', explanation: '二分查找要求有序顺序表。' },
    { id: 'choice-006', category: '公共基础', question: '冒泡排序在最坏情况下的时间复杂度是？', options: ['O(1)', 'O(log2n)', 'O(n)', 'O(n^2)'], answer: 'D', explanation: '冒泡排序最坏情况下需要进行大量相邻比较和交换，时间复杂度为O(n^2)。' },
    { id: 'choice-007', category: '公共基础', question: '结构化程序设计的三种基本结构不包括？', options: ['顺序结构', '选择结构', '循环结构', '网状结构'], answer: 'D', explanation: '结构化程序设计包含顺序、选择、循环三种基本结构。' },
    { id: 'choice-008', category: '公共基础', question: '面向对象方法中实现信息隐蔽主要依靠？', options: ['继承', '封装', '多态', '分类'], answer: 'B', explanation: '封装隐藏对象内部细节，只暴露必要接口。' },
    { id: 'choice-009', category: '公共基础', question: '软件测试的主要目的是？', options: ['证明程序无错', '发现错误', '编写代码', '生成文档'], answer: 'B', explanation: '软件测试的主要目的是发现错误，而不是证明程序完全正确。' },
    { id: 'choice-010', category: '公共基础', question: '模块独立性追求的是？', options: ['高耦合、高内聚', '高耦合、低内聚', '低耦合、高内聚', '低耦合、低内聚'], answer: 'C', explanation: '模块设计目标是低耦合、高内聚。' },
    { id: 'choice-011', category: '数据库', question: '数据库系统的核心软件是？', options: ['数据库', '数据库管理系统', '操作系统', '编译系统'], answer: 'B', explanation: '数据库管理系统DBMS是数据库系统的核心软件。' },
    { id: 'choice-012', category: '数据库', question: 'E-R图中表示实体的图形是？', options: ['矩形', '椭圆', '菱形', '圆角矩形'], answer: 'A', explanation: 'E-R图中实体用矩形，属性用椭圆，联系用菱形。' },
    { id: 'choice-013', category: '数据库', question: '关系数据库中一行通常称为？', options: ['属性', '字段', '元组', '域'], answer: 'C', explanation: '关系表中的一行称为元组或记录。' },
    { id: 'choice-014', category: 'Word', question: 'Word中自动生成目录的前提是？', options: ['设置标题样式', '设置页边距', '插入文本框', '手动输入目录'], answer: 'A', explanation: '自动目录依赖标题1、标题2等标题样式。' },
    { id: 'choice-015', category: 'Word', question: 'Word中分节符的主要作用是？', options: ['删除段落', '把文档划分为可独立设置格式的节', '改变字体颜色', '插入图片'], answer: 'B', explanation: '分节后，不同节可以设置不同页眉页脚、页码、页面方向等。' },
    { id: 'choice-016', category: 'Word', question: 'Word邮件合并中的数据源通常可以是？', options: ['Excel表格', '屏幕截图', '音频文件', '动画文件'], answer: 'A', explanation: '邮件合并常用Excel表格作为收件人数据源。' },
    { id: 'choice-017', category: 'Excel', question: 'Excel绝对引用A1单元格应写成？', options: ['A1', '$A$1', 'A$1', '$A1'], answer: 'B', explanation: '列和行都固定时，列标和行号前都加$。' },
    { id: 'choice-018', category: 'Excel', question: 'VLOOKUP函数第四个参数FALSE表示？', options: ['模糊匹配', '精确匹配', '降序排序', '返回空值'], answer: 'B', explanation: 'FALSE或0表示精确匹配。' },
    { id: 'choice-019', category: 'Excel', question: '使用分类汇总前，必须先进行什么操作？', options: ['插入图表', '按分类字段排序', '合并单元格', '设置页眉'], answer: 'B', explanation: '分类汇总前必须按分类字段排序，否则同类数据可能无法正确汇总。' },
    { id: 'choice-020', category: 'Excel', question: '数据透视表的四个区域通常是？', options: ['行、列、值、筛选器', '标题、正文、页脚、批注', '字体、段落、样式、主题', '动画、切换、放映、审阅'], answer: 'A', explanation: '数据透视表字段区域通常包括行、列、值、筛选器。' },
    { id: 'choice-021', category: 'Excel', question: 'COUNTIF函数主要用于？', options: ['按条件计数', '按条件求和', '查找数据', '截取文本'], answer: 'A', explanation: 'COUNTIF用于统计满足条件的单元格个数。' },
    { id: 'choice-022', category: 'Excel', question: '显示各部分占总体比例，最适合使用哪类图表？', options: ['折线图', '饼图', '散点图', '雷达图'], answer: 'B', explanation: '饼图适合表示部分与整体的比例关系。' },
    { id: 'choice-023', category: 'PPT', question: 'PowerPoint中统一设置幻灯片格式应使用？', options: ['幻灯片母版', '备注页', '阅读视图', '打印预览'], answer: 'A', explanation: '幻灯片母版用于统一控制多张幻灯片的版式和格式。' },
    { id: 'choice-024', category: 'PPT', question: '从当前幻灯片开始放映的快捷键是？', options: ['F5', 'Shift + F5', 'Ctrl + M', 'Ctrl + K'], answer: 'B', explanation: 'F5从头放映，Shift+F5从当前幻灯片开始放映。' },
    { id: 'choice-025', category: 'PPT', question: 'PPT动画的四种类型不包括？', options: ['进入', '强调', '退出', '打印'], answer: 'D', explanation: 'PPT动画类型包括进入、强调、退出、动作路径。' },
    { id: 'choice-026', category: 'Office', question: '保存文档的通用快捷键是？', options: ['Ctrl + S', 'Ctrl + P', 'Ctrl + F', 'Ctrl + H'], answer: 'A', explanation: 'Ctrl+S是保存，Ctrl+P是打印。' },
    { id: 'choice-027', category: 'Office', question: '查找的通用快捷键是？', options: ['Ctrl + F', 'Ctrl + H', 'Ctrl + Z', 'Ctrl + Y'], answer: 'A', explanation: 'Ctrl+F是查找，Ctrl+H是替换。' },
    { id: 'choice-028', category: 'Office', question: 'Excel启用宏的工作簿扩展名是？', options: ['.xlsx', '.xlsm', '.docm', '.pptx'], answer: 'B', explanation: '.xlsm是启用宏的Excel工作簿。' },
    { id: 'choice-029', category: 'Office', question: '打印第1页、第3页和第5到7页，应输入？', options: ['1;3;5-7', '1,3,5-7', '1 3 5 7', '1/3/5-7'], answer: 'B', explanation: '不连续页用逗号分隔，连续页用连字符表示。' },
    { id: 'choice-030', category: 'PPT', question: '插入超链接的快捷键是？', options: ['Ctrl + K', 'Ctrl + L', 'Ctrl + M', 'Ctrl + D'], answer: 'A', explanation: 'Office中插入超链接常用Ctrl+K。' }
];
