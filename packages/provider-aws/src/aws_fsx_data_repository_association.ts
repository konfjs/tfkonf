import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsFsxDataRepositoryAssociationArgss3AutoExportPolicy {}
export interface AwsFsxDataRepositoryAssociationArgss3AutoImportPolicy {}
export interface AwsFsxDataRepositoryAssociationArgss3 {
  auto_export_policy: AwsFsxDataRepositoryAssociationArgss3AutoExportPolicy;
  auto_import_policy: AwsFsxDataRepositoryAssociationArgss3AutoImportPolicy;
}
export interface AwsFsxDataRepositoryAssociationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxDataRepositoryAssociationArgs {
  batch_import_meta_data_on_create?: boolean;
  data_repository_path: string;
  delete_data_in_filesystem?: boolean;
  file_system_id: string;
  file_system_path: string;
  tags?: {
    [key: string]: string;
  };
  s3: AwsFsxDataRepositoryAssociationArgss3;
  timeouts: AwsFsxDataRepositoryAssociationArgstimeouts;
}
export class aws_fsx_data_repository_association extends TerraformResource {
  readonly arn!: string;
  readonly association_id!: string;
  readonly id?: string;
  readonly imported_file_chunk_size?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxDataRepositoryAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_data_repository_association");
  }
}