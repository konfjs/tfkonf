import { TerraformConfig, TerraformResource } from "tfs";
export interface Attribute {
  key: string;
  string_value: string;
}
export interface ParameterObject {
  id: string;
  attribute: Attribute;
}
export interface ParameterValue {
  id: string;
  string_value: string;
}
export interface Field {
  key: string;
  ref_value?: string;
  string_value?: string;
}
export interface PipelineObject {
  id: string;
  name: string;
  field: Field;
}
export interface AwsDatapipelinePipelineDefinitionArgs {
  pipeline_id: string;
  parameter_object: ParameterObject;
  parameter_value: ParameterValue;
  pipeline_object: PipelineObject;
}
export class aws_datapipeline_pipeline_definition extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatapipelinePipelineDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_datapipeline_pipeline_definition");
  }
}