import { TerraformConfig, TerraformResource } from "tfs";
export interface CatalogData {
  about_text?: string;
  architectures?: string[];
  description?: string;
  operating_systems?: string[];
  usage_text?: string;
}
export interface Timeouts {
  delete?: string;
}
export interface AwsEcrpublicRepositoryArgs {
  force_destroy?: boolean;
  repository_name: string;
  tags?: {
    [key: string]: string;
  };
  catalog_data: CatalogData;
  timeouts: Timeouts;
}
export class aws_ecrpublic_repository extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly registry_id!: string;
  readonly repository_uri!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrpublicRepositoryArgs) {
    super(config, "resource", args, resourceName, "aws_ecrpublic_repository");
  }
}