module.exports = [
"[project]/areiasdev/Taskflow/frontend/src/lib/api/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectsApi",
    ()=>projectsApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/src/lib/api/client.ts [app-ssr] (ecmascript)");
;
const projectsApi = {
    getAll: (ownerId)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/projects/${ownerId}`).then((r)=>r.data),
    getById: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/projects/detail/${id}`).then((r)=>r.data),
    create: (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/api/projects", payload).then((r)=>r.data),
    update: (id, payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/api/projects/${id}`, payload).then((r)=>r.data),
    delete: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/api/projects/${id}`)
};
}),
"[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Alert/Alert.js [app-ssr] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Card/Card.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardActions$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/CardActions/CardActions.js [app-ssr] (ecmascript) <export default as CardActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/CardContent/CardContent.js [app-ssr] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Chip/Chip.js [app-ssr] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Dialog/Dialog.js [app-ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Grid/Grid.js [app-ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Stack/Stack.js [app-ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/TextField/TextField.js [app-ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-ssr] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/Add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/DeleteOutline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EditOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/EditOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FolderOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/FolderOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TaskAlt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/icons-material/esm/TaskAlt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/src/lib/auth/authContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/src/lib/api/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
;
const emptyForm = {
    name: "",
    description: ""
};
function ProjectsPage() {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchProjects = async ()=>{
        if (!user) return;
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectsApi"].getAll(user.id);
            setProjects(data);
        } catch  {
            setError("Failed to load projects.");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProjects();
    }, [
        user
    ]);
    const openCreateDialog = ()=>{
        setSelectedProject(null);
        setForm(emptyForm);
        setDialogOpen(true);
    };
    const openEditDialog = (project)=>{
        setSelectedProject(project);
        setForm({
            name: project.name,
            description: project.description ?? ""
        });
        setDialogOpen(true);
    };
    const openDeleteDialog = (project)=>{
        setSelectedProject(project);
        setDeleteDialogOpen(true);
    };
    const handleSubmit = async ()=>{
        if (!user || !form.name.trim()) return;
        setSubmitting(true);
        try {
            if (selectedProject) {
                const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectsApi"].update(selectedProject.id, {
                    id: selectedProject.id,
                    name: form.name,
                    description: form.description || undefined
                });
                setProjects((prev)=>prev.map((p)=>p.id === updated.id ? updated : p));
            } else {
                const created = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectsApi"].create({
                    name: form.name,
                    description: form.description || undefined,
                    ownerId: user.id
                });
                setProjects((prev)=>[
                        created,
                        ...prev
                    ]);
            }
            setDialogOpen(false);
        } catch  {
            setError("Failed to save project.");
        } finally{
            setSubmitting(false);
        }
    };
    const handleDelete = async ()=>{
        if (!selectedProject) return;
        setSubmitting(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectsApi"].delete(selectedProject.id);
            setProjects((prev)=>prev.filter((p)=>p.id !== selectedProject.id));
            setDeleteDialogOpen(false);
        } catch  {
            setError("Failed to delete project.");
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        className: "min-h-screen bg-indigo-50 dark:bg-indigo-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "border-b border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    maxWidth: "lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        className: "py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h5",
                                className: "font-bold text-indigo-900 dark:text-indigo-100",
                                children: "TaskFlow"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                direction: "row",
                                alignItems: "center",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        className: "text-indigo-500 dark:text-indigo-300",
                                        children: user?.fullName
                                    }, void 0, false, {
                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        onClick: logout,
                                        variant: "outlined",
                                        size: "small",
                                        className: "border-indigo-300 text-indigo-600 hover:border-indigo-500 dark:border-indigo-600 dark:text-indigo-300 normal-case",
                                        children: "Sign out"
                                    }, void 0, false, {
                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                maxWidth: "lg",
                className: "py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                spacing: 0.5,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "h4",
                                        className: "font-bold text-indigo-900 dark:text-indigo-100",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        className: "text-indigo-500 dark:text-indigo-300",
                                        children: [
                                            projects.length,
                                            " project",
                                            projects.length !== 1 ? "s" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 24
                                }, void 0),
                                onClick: openCreateDialog,
                                className: "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold normal-case rounded-xl",
                                children: "New Project"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                        severity: "error",
                        className: "mb-4",
                        onClose: ()=>setError(""),
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        className: "flex justify-center py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                            className: "text-indigo-600"
                        }, void 0, false, {
                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this) : projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        className: "flex flex-col items-center justify-center py-24 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FolderOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "text-indigo-300 dark:text-indigo-700 text-6xl"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h6",
                                className: "font-semibold text-indigo-400 dark:text-indigo-500",
                                children: "No projects yet"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                className: "text-indigo-300 dark:text-indigo-600",
                                children: "Create your first project to get started"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 26
                                }, void 0),
                                onClick: openCreateDialog,
                                className: "bg-indigo-600 hover:bg-indigo-700 text-white normal-case rounded-xl mt-2",
                                children: "New Project"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        container: true,
                        spacing: 3,
                        children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                size: {
                                    xs: 12,
                                    sm: 6,
                                    md: 4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                    elevation: 0,
                                    className: "rounded-2xl border border-indigo-100 dark:border-indigo-800 dark:bg-indigo-900 h-full flex flex-col hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-900 transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                            className: "flex-1 cursor-pointer",
                                            onClick: ()=>router.push(`/projects/${project.id}`),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                                spacing: 1.5,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "h6",
                                                        className: "font-semibold text-indigo-900 dark:text-indigo-100 leading-tight",
                                                        children: project.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, this),
                                                    project.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "body2",
                                                        className: "text-indigo-500 dark:text-indigo-400 line-clamp-2",
                                                        children: project.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                                        direction: "row",
                                                        spacing: 1,
                                                        alignItems: "center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TaskAlt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "text-indigo-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 33
                                                            }, void 0),
                                                            label: `${project.taskCount} task${project.taskCount !== 1 ? "s" : ""}`,
                                                            size: "small",
                                                            className: "bg-indigo-50 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 border-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "caption",
                                                        className: "text-indigo-400 dark:text-indigo-500",
                                                        children: new Date(project.createdAt).toLocaleDateString("pt-PT", {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardActions$3e$__["CardActions"], {
                                            className: "px-4 pb-4 pt-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                    title: "Edit",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                        size: "small",
                                                        onClick: ()=>openEditDialog(project),
                                                        className: "text-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-800",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EditOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            fontSize: "small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                    title: "Delete",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                        size: "small",
                                                        onClick: ()=>openDeleteDialog(project),
                                                        className: "text-indigo-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            fontSize: "small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this)
                            }, project.id, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: dialogOpen,
                onClose: ()=>setDialogOpen(false),
                fullWidth: true,
                maxWidth: "sm",
                PaperProps: {
                    className: "rounded-2xl dark:bg-indigo-900"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        className: "font-bold text-indigo-900 dark:text-indigo-100",
                        children: selectedProject ? "Edit Project" : "New Project"
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            spacing: 3,
                            className: "pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                    label: "Name",
                                    value: form.name,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                name: e.target.value
                                            })),
                                    fullWidth: true,
                                    required: true,
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
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
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        className: "px-6 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: ()=>setDialogOpen(false),
                                className: "text-indigo-500 normal-case",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                onClick: handleSubmit,
                                disabled: submitting || !form.name.trim(),
                                className: "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold normal-case rounded-xl",
                                children: submitting ? "Saving..." : selectedProject ? "Save" : "Create"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: deleteDialogOpen,
                onClose: ()=>setDeleteDialogOpen(false),
                PaperProps: {
                    className: "rounded-2xl dark:bg-indigo-900"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        className: "font-bold text-indigo-900 dark:text-indigo-100",
                        children: "Delete Project"
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            className: "text-indigo-600 dark:text-indigo-300",
                            children: [
                                "Are you sure you want to delete",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: selectedProject?.name
                                }, void 0, false, {
                                    fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                "? This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        className: "px-6 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: ()=>setDeleteDialogOpen(false),
                                className: "text-indigo-500 normal-case",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                onClick: handleDelete,
                                disabled: submitting,
                                className: "bg-red-500 hover:bg-red-600 text-white font-semibold normal-case rounded-xl",
                                children: submitting ? "Deleting..." : "Delete"
                            }, void 0, false, {
                                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/areiasdev/Taskflow/frontend/src/app/(dashboard)/projects/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=areiasdev_Taskflow_frontend_src_90478631._.js.map