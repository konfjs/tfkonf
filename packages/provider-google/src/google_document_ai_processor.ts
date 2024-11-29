import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDocumentAiProcessorArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleDocumentAiProcessorArgs {
  display_name: string;
  kms_key_name?: string;
  location: string;
  type: string;
  timeouts: GoogleDocumentAiProcessorArgstimeouts;
}
export class google_document_ai_processor extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDocumentAiProcessorArgs) {
    super(config, "resource", args, resourceName, "google_document_ai_processor");
  }
}