import * as t from '@babel/types';
import type { Block } from './schema.js';
import { toPascalCase } from './utils.js';

function constructorParams(className: string): t.Identifier[] {
    const configParam = t.identifier('config');
    configParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsTypeReference(t.identifier('TerraformConfig')),
    );

    const resourceNameParam = t.identifier('resourceName');
    resourceNameParam.typeAnnotation = t.tsTypeAnnotation(t.tsStringKeyword());

    const argsParam = t.identifier('args');
    argsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsTypeReference(t.identifier(`${toPascalCase(className)}Args`)),
    );
    return [configParam, resourceNameParam, argsParam];
}

export function generateClassDeclaration(ast: t.Program, className: string, block: Block) {
    const classBody = t.classBody([]);

    classBody.body.push(
        t.classMethod(
            'constructor',
            t.identifier('constructor'),
            constructorParams(className),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(t.super(), [
                        t.identifier('config'),
                        t.stringLiteral('resource'),
                        t.identifier('args'),
                        t.identifier('resourceName'),
                        t.stringLiteral(className),
                    ]),
                ),
            ]),
        ),
    );

    ast.body.push(
        t.exportNamedDeclaration(
            t.classDeclaration(
                t.identifier(className),
                t.identifier('TerraformResource'),
                classBody,
            ),
        ),
    );
}
