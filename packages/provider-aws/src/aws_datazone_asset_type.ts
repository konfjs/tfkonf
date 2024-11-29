import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDatazoneAssetTypeArgsFormsInput {
  map_block_key: string;
  required?: boolean;
  type_identifier: string;
  type_revision: string;
}
export interface AwsDatazoneAssetTypeArgstimeouts {
  create?: string;
}
export interface AwsDatazoneAssetTypeArgs {
  description?: string;
  domain_identifier: string;
  name: string;
  owning_project_identifier: string;
  forms_input: AwsDatazoneAssetTypeArgsFormsInput;
  timeouts: AwsDatazoneAssetTypeArgstimeouts;
}
export class aws_datazone_asset_type extends TerraformResource {
  readonly created_at!: string;
  readonly created_by!: string;
  readonly revision!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneAssetTypeArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_asset_type");
  }
}