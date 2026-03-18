(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/areiasdev/Taskflow/frontend/src/lib/api/tasks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Priority",
    ()=>Priority,
    "PriorityLabel",
    ()=>PriorityLabel,
    "TaskStatus",
    ()=>TaskStatus,
    "TaskStatusLabel",
    ()=>TaskStatusLabel,
    "tasksApi",
    ()=>tasksApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/src/lib/api/client.ts [app-client] (ecmascript)");
;
var TaskStatus = /*#__PURE__*/ function(TaskStatus) {
    TaskStatus[TaskStatus["Todo"] = 0] = "Todo";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Done"] = 2] = "Done";
    return TaskStatus;
}({});
var Priority = /*#__PURE__*/ function(Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Medium"] = 1] = "Medium";
    Priority[Priority["High"] = 2] = "High";
    return Priority;
}({});
const TaskStatusLabel = {
    [0]: "To Do",
    [1]: "In Progress",
    [2]: "Done"
};
const PriorityLabel = {
    [0]: "Low",
    [1]: "Medium",
    [2]: "High"
};
const tasksApi = {
    getAll: (projectId)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/taskitems/project/${projectId}`).then((r)=>r.data),
    getById: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/taskitems/detail/${id}`).then((r)=>r.data),
    create: (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/taskitems", payload).then((r)=>r.data),
    update: (id, payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/api/taskitems/${id}`, payload).then((r)=>r.data),
    delete: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/taskitems/${id}`)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/areiasdev/Taskflow/frontend/src/lib/api/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectsApi",
    ()=>projectsApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/src/lib/api/client.ts [app-client] (ecmascript)");
;
const projectsApi = {
    getAll: (ownerId)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/projects/${ownerId}`).then((r)=>r.data),
    getById: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/projects/detail/${id}`).then((r)=>r.data),
    create: (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/projects", payload).then((r)=>r.data),
    update: (id, payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/api/projects/${id}`, payload).then((r)=>r.data),
    delete: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/projects/${id}`)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectTasksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/ArrowBack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/DeleteOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EditOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/EditOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AssignmentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/AssignmentOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/src/lib/api/tasks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/src/lib/api/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const statusColumns = [
    __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatus"].Todo,
    __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatus"].InProgress,
    __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatus"].Done
];
const statusColors = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatus"].Todo]: "bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200",
    [__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatus"].InProgress]: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200",
    [__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatus"].Done]: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200"
};
const priorityColors = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Priority"].Low]: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-200",
    [__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Priority"].Medium]: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200",
    [__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Priority"].High]: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
};
const emptyForm = {
    title: "",
    description: "",
    priority: __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Priority"].Medium,
    status: __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatus"].Todo,
    dueDate: ""
};
function ProjectTasksPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTask, setSelectedTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectTasksPage.useEffect": ()=>{
            const fetchData = {
                "ProjectTasksPage.useEffect.fetchData": async ()=>{
                    try {
                        const [projectData, tasksData] = await Promise.all([
                            __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsApi"].getById(id),
                            __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasksApi"].getAll(id)
                        ]);
                        setProject(projectData);
                        setTasks(tasksData);
                    } catch  {
                        setError("Failed to load project data.");
                    } finally{
                        setLoading(false);
                    }
                }
            }["ProjectTasksPage.useEffect.fetchData"];
            fetchData();
        }
    }["ProjectTasksPage.useEffect"], [
        id
    ]);
    const openCreateDialog = ()=>{
        setSelectedTask(null);
        setForm(emptyForm);
        setDialogOpen(true);
    };
    const openEditDialog = (task)=>{
        setSelectedTask(task);
        setForm({
            title: task.title,
            description: task.description ?? "",
            priority: task.priority,
            status: task.status,
            dueDate: task.dueDate ? task.dueDate.split("T")[0] : ""
        });
        setDialogOpen(true);
    };
    const openDeleteDialog = (task)=>{
        setSelectedTask(task);
        setDeleteDialogOpen(true);
    };
    const handleSubmit = async ()=>{
        if (!form.title.trim()) return;
        setSubmitting(true);
        try {
            if (selectedTask) {
                const payload = {
                    id: selectedTask.id,
                    title: form.title,
                    description: form.description || undefined,
                    status: form.status,
                    priority: form.priority,
                    dueDate: form.dueDate || undefined
                };
                const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasksApi"].update(selectedTask.id, payload);
                setTasks((prev)=>prev.map((t)=>t.id === updated.id ? updated : t));
            } else {
                const payload = {
                    title: form.title,
                    description: form.description || undefined,
                    priority: form.priority,
                    dueDate: form.dueDate || undefined,
                    projectId: id
                };
                const created = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasksApi"].create(payload);
                setTasks((prev)=>[
                        created,
                        ...prev
                    ]);
            }
            setDialogOpen(false);
        } catch  {
            setError("Failed to save task.");
        } finally{
            setSubmitting(false);
        }
    };
    const handleDelete = async ()=>{
        if (!selectedTask) return;
        setSubmitting(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasksApi"].delete(selectedTask.id);
            setTasks((prev)=>prev.filter((t)=>t.id !== selectedTask.id));
            setDeleteDialogOpen(false);
        } catch  {
            setError("Failed to delete task.");
        } finally{
            setSubmitting(false);
        }
    };
    const tasksByStatus = (status)=>tasks.filter((t)=>t.status === status);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        className: "min-h-screen bg-indigo-50 dark:bg-indigo-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "border-b border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        className: "py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                direction: "row",
                                alignItems: "center",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                        title: "Back to projects",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            onClick: ()=>router.push("/projects"),
                                            className: "text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                        spacing: 0,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "h6",
                                                className: "font-bold text-indigo-900 dark:text-indigo-100 leading-tight",
                                                children: project?.name ?? "Loading..."
                                            }, void 0, false, {
                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            project?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                className: "text-indigo-400 dark:text-indigo-400",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 26
                                }, void 0),
                                onClick: openCreateDialog,
                                className: "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold normal-case rounded-xl",
                                children: "New Task"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                maxWidth: "xl",
                className: "py-8",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                        severity: "error",
                        className: "mb-4",
                        onClose: ()=>setError(""),
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        className: "flex justify-center py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                            className: "text-indigo-600"
                        }, void 0, false, {
                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        direction: "row",
                        spacing: 3,
                        alignItems: "flex-start",
                        children: statusColumns.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "flex-1 min-w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                        direction: "row",
                                        alignItems: "center",
                                        spacing: 1,
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                label: __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatusLabel"][status],
                                                size: "small",
                                                className: statusColors[status]
                                            }, void 0, false, {
                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                className: "text-indigo-400 dark:text-indigo-500 font-medium",
                                                children: tasksByStatus(status).length
                                            }, void 0, false, {
                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                        spacing: 2,
                                        children: tasksByStatus(status).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            className: "border-2 border-dashed border-indigo-200 dark:border-indigo-800 rounded-2xl py-8 flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AssignmentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "text-indigo-300 dark:text-indigo-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    className: "text-indigo-300 dark:text-indigo-700",
                                                    children: "No tasks"
                                                }, void 0, false, {
                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 21
                                        }, this) : tasksByStatus(status).map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                                elevation: 0,
                                                className: "rounded-2xl border border-indigo-100 dark:border-indigo-800 dark:bg-indigo-900 hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-900 transition-shadow",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                                    className: "pb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                                        spacing: 1.5,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                                                direction: "row",
                                                                alignItems: "flex-start",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body2",
                                                                        className: "font-semibold text-indigo-900 dark:text-indigo-100 leading-snug flex-1 pr-1",
                                                                        children: task.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                                                        direction: "row",
                                                                        spacing: 0,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                                                title: "Edit",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                                    size: "small",
                                                                                    onClick: ()=>openEditDialog(task),
                                                                                    className: "text-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-800",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EditOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        sx: {
                                                                                            fontSize: 16
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                                        lineNumber: 272,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                                    lineNumber: 267,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                                lineNumber: 266,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                                                title: "Delete",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                                    size: "small",
                                                                                    onClick: ()=>openDeleteDialog(task),
                                                                                    className: "text-indigo-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        sx: {
                                                                                            fontSize: 16
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                                        lineNumber: 281,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                                    lineNumber: 276,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                                lineNumber: 275,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 29
                                                            }, this),
                                                            task.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "caption",
                                                                className: "text-indigo-400 dark:text-indigo-500 line-clamp-2",
                                                                children: task.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                                                direction: "row",
                                                                spacing: 1,
                                                                flexWrap: "wrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                                        label: __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PriorityLabel"][task.priority],
                                                                        size: "small",
                                                                        className: priorityColors[task.priority]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    task.dueDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                                        label: new Date(task.dueDate).toLocaleDateString("pt-PT", {
                                                                            day: "numeric",
                                                                            month: "short"
                                                                        }),
                                                                        size: "small",
                                                                        className: "bg-indigo-50 dark:bg-indigo-800 text-indigo-500 dark:text-indigo-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                        lineNumber: 300,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 25
                                                }, this)
                                            }, task.id, false, {
                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, status, true, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: dialogOpen,
                onClose: ()=>setDialogOpen(false),
                fullWidth: true,
                maxWidth: "sm",
                PaperProps: {
                    className: "rounded-2xl dark:bg-indigo-900"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        className: "font-bold text-indigo-900 dark:text-indigo-100",
                        children: selectedTask ? "Edit Task" : "New Task"
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            spacing: 3,
                            className: "pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                    label: "Title",
                                    value: form.title,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                title: e.target.value
                                            })),
                                    fullWidth: true,
                                    required: true,
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                    label: "Description",
                                    value: form.description,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                description: e.target.value
                                            })),
                                    fullWidth: true,
                                    multiline: true,
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                    direction: "row",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                            label: "Priority",
                                            value: form.priority,
                                            onChange: (e)=>setForm((f)=>({
                                                        ...f,
                                                        priority: Number(e.target.value)
                                                    })),
                                            select: true,
                                            fullWidth: true,
                                            children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PriorityLabel"]).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                    value: Number(value),
                                                    children: label
                                                }, value, false, {
                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        selectedTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                            label: "Status",
                                            value: form.status,
                                            onChange: (e)=>setForm((f)=>({
                                                        ...f,
                                                        status: Number(e.target.value)
                                                    })),
                                            select: true,
                                            fullWidth: true,
                                            children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskStatusLabel"]).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                    value: Number(value),
                                                    children: label
                                                }, value, false, {
                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                    label: "Due Date",
                                    type: "date",
                                    value: form.dueDate,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                dueDate: e.target.value
                                            })),
                                    fullWidth: true,
                                    slotProps: {
                                        inputLabel: {
                                            shrink: true
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        className: "px-6 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: ()=>setDialogOpen(false),
                                className: "text-indigo-500 normal-case",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                onClick: handleSubmit,
                                disabled: submitting || !form.title.trim(),
                                className: "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold normal-case rounded-xl",
                                children: submitting ? "Saving..." : selectedTask ? "Save" : "Create"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: deleteDialogOpen,
                onClose: ()=>setDeleteDialogOpen(false),
                PaperProps: {
                    className: "rounded-2xl dark:bg-indigo-900"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        className: "font-bold text-indigo-900 dark:text-indigo-100",
                        children: "Delete Task"
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            className: "text-indigo-600 dark:text-indigo-300",
                            children: [
                                "Are you sure you want to delete ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: selectedTask?.title
                                }, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 45
                                }, this),
                                "? This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        className: "px-6 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: ()=>setDeleteDialogOpen(false),
                                className: "text-indigo-500 normal-case",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                onClick: handleDelete,
                                disabled: submitting,
                                className: "bg-red-500 hover:bg-red-600 text-white font-semibold normal-case rounded-xl",
                                children: submitting ? "Deleting..." : "Delete"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/projects/[id]/page.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(ProjectTasksPage, "oogdi3f4jytUakHBl+3JYou7Rjg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProjectTasksPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectTasksPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=areiasdev_Taskflow_frontend_src_53e2443d._.js.map