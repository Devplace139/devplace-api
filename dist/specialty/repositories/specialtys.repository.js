"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtysRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SpecialtysRepository = class SpecialtysRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.specialty.findMany();
    }
    async findById(id) {
        return this.prisma.specialty.findUnique({
            where: { id },
        });
    }
    async findByName(name) {
        return this.prisma.specialty.findFirst({
            where: { name },
        });
    }
    async create(createSpecialtyDto) {
        return this.prisma.specialty.create({
            data: {
                ...createSpecialtyDto,
            },
        });
    }
    async update(id, updateSpecialtyDto) {
        const data = { ...updateSpecialtyDto };
        return this.prisma.specialty.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        await this.prisma.specialty.delete({
            where: { id },
        });
    }
};
exports.SpecialtysRepository = SpecialtysRepository;
exports.SpecialtysRepository = SpecialtysRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SpecialtysRepository);
//# sourceMappingURL=specialtys.repository.js.map