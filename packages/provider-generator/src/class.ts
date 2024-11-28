import * as t from '@babel/types';
import { toPascalCase } from './utils.js';

function constructorParams(className: string): t.Identifier[] {
    const configParam = t.identifier('config');
    configParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsTypeReference(t.identifier('TerraformConfig')),
    );

    const nameParam = t.identifier('name');
    nameParam.typeAnnotation = t.tsTypeAnnotation(t.tsStringKeyword());

    const argsParam = t.identifier('args');
    argsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsTypeReference(t.identifier(`${toPascalCase(className)}Args`)),
    );
    return [configParam, nameParam, argsParam];
}

export function generateClassDeclaration(className: string): t.ExportNamedDeclaration {
    return t.exportNamedDeclaration(
        t.classDeclaration(
            t.identifier(className),
            t.identifier('TerraformResource'),
            t.classBody([
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
                                t.identifier('name'),
                                t.stringLiteral(className),
                            ]),
                        ),
                    ]),
                ),
            ]),
        ),
    );
}
