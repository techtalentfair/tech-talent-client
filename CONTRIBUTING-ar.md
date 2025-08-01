# 🌿 تسمية الفروع (Branches Naming)

يجب أن تتبع أسماء الفروع تنسيقًا منظمًا على النحو التالي:

**(نوع المهمة / اسم الميزة / رقم التذكرة في Jira - المهمة الفرعية)**  

### أمثلة:
- `Feature/navbar/TT-101-navbar-refactor`
- `Bugfix/auth/TT-204-login-issue`
- `Chore/deps/TT-305-update-react`

### التفصيل:
1. **نوع المهمة** → (Feature, Bugfix, Refactor, Hotfix, Chore)
2. **اسم الميزة** → الميزة الرئيسية التي يتم العمل عليها.
3. **رقم تذكرة Jira** → يساعد في تتبع الكوميتات داخل Jira.
4. **المهمة الفرعية** → تحديد الجزء المتأثر مثل (UI, Logic, API).

<br/>
<br/>

---
<br/>
<br/>

# 🔗 رسائل الـ Git Commit

يجب أن تساعد رسائل الكوميت في تحسين تجربة مراجعة الكود.

- اجعل الرسائل قصيرة (72 حرفًا أو أقل).
- استخدم المضارع.
- استخدم أسلوب الأمر.
- ابدأ الكوميت بـ `feat(component_Name)` و `:emoji-to-use:` لتوضيح طبيعة التعديل.

## الصياغة المفضلة ✅:
- `Feature(navbar) 🎨 تحسين بنية الواجهة لتصبح متجاوبة.`
- `Bugfix(auth) 🐛 إصلاح مشكلة بقاء المستخدم مسجل الدخول.`
- `Chore(deps) ⬆️ ترقية إصدار React.`

## الصياغة غير المفضلة ⚠️:
- `Improve UI structure.`
- `Resolve login issue.`
- `Upgrade dependencies.`

<br/>
<br/>

# 📌 طبيعة الكوميتات (Commit Nature)

استخدام الإيموجي يساعد في التعرف بسرعة على طبيعة التعديل.

لبدء رسالة الكوميت بشكل واضح، استخدم الإيموجي المناسب:

🎨 `:art:` تحسين هيكلية/تنسيق الكود.  
⚡ `:zap:` تحسين الأداء.  
🔥 `:fire:` حذف كود أو ملفات.  
🐛 `:bug:` إصلاح مشكلة.  
🚑 `:ambulance:` إصلاح عاجل (Hotfix).  
✨ `:sparkles:` إضافة ميزات جديدة.  
📝 `:memo:` كتابة أو تعديل التوثيق.  
🚀 `:rocket:` تحديث عناصر الواجهة والتصميمات.  
🔒 `:lock:` إصلاح مشكلات الأمان.  
✅ `:white_check_mark:` إصدار نسخة أو إضافة علامة إصدار.  
🔨 `:construction:` العمل قيد التطوير.  
💚 `:green_heart:` إصلاح مشاكل CI Build.  
⬇️ `:arrow_down:` تخفيض إصدارات التبعيات.  
⬆️ `:arrow_up:` ترقية إصدارات التبعيات.  
👷 `:construction_worker:` إضافة نظام CI Build.  
📈 `:chart_with_upwards_trend:` إضافة تحليلات أو كود تتبع.  
♻️ `:recycle:` إعادة هيكلة الكود.  
➖ `:heavy_minus_sign:` إزالة تبعية.  
➕ `:heavy_plus_sign:` إضافة تبعية.  
🔧 `:wrench:` تغيير ملفات الإعدادات.  
🌐 `:globe_with_meridians:` دعم اللغات والتوطين.  
⏪ `:rewind:` التراجع عن التعديلات.  
👌 `:ok_hand:` تحسين الكود بعد مراجعة PR.  
🏗 `:building_construction:` إجراء تغييرات معمارية.  

---

### 🎯 الهدف من هذه الإرشادات
- تحسين وضوح المشروع وسهولة تتبع التعديلات.  
- جعل مراجعة الكود أسرع وأكثر كفاءة.  
- ضمان التناسق بين الفريق وتجنب فوضى التسمية العشوائية.  

---

🔹 **For the English version of this guide, check out** [CONTRIBUTING.md](./CONTRIBUTING.md)
