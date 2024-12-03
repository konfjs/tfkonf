import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDocumentAiProcessorDefaultVersionArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleDocumentAiProcessorDefaultVersionArgs {
  processor: string;
  version: string;
  timeouts?: GoogleDocumentAiProcessorDefaultVersionArgsTimeouts;
}
export class google_document_ai_processor_default_version extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDocumentAiProcessorDefaultVersionArgs) {
    super(config, "resource", args, resourceName, "google_document_ai_processor_default_version");
  }
}