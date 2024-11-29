import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDatapipelinePipelineDefinitionArgsParameterObjectAttribute {
  key: string;
  string_value: string;
}
export interface AwsDatapipelinePipelineDefinitionArgsParameterObject {
  id: string;
  attribute: AwsDatapipelinePipelineDefinitionArgsParameterObjectAttribute;
}
export interface AwsDatapipelinePipelineDefinitionArgsParameterValue {
  id: string;
  string_value: string;
}
export interface AwsDatapipelinePipelineDefinitionArgsPipelineObjectField {
  key: string;
  ref_value?: string;
  string_value?: string;
}
export interface AwsDatapipelinePipelineDefinitionArgsPipelineObject {
  id: string;
  name: string;
  field: AwsDatapipelinePipelineDefinitionArgsPipelineObjectField;
}
export interface AwsDatapipelinePipelineDefinitionArgs {
  pipeline_id: string;
  parameter_object: AwsDatapipelinePipelineDefinitionArgsParameterObject;
  parameter_value: AwsDatapipelinePipelineDefinitionArgsParameterValue;
  pipeline_object: AwsDatapipelinePipelineDefinitionArgsPipelineObject;
}
export class aws_datapipeline_pipeline_definition extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatapipelinePipelineDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_datapipeline_pipeline_definition");
  }
}