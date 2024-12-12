"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const livroController_1 = require("../controllers/livroController"); // Verifique se o arquivo existe
const router = (0, express_1.Router)();
router.post('/cliente', livroController_1.create);
router.get('/cliente', livroController_1.researchAll);
router.get('/cliente/:email', livroController_1.researchId);
router.put('/cliente/:id', livroController_1.update);
router.delete('/cliente/:id', livroController_1.deleted);
exports.default = router;
