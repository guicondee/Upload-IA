import { Button } from "./components/ui/button";
import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="px-6 py-3 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold">upload.ai</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Desenvolvido no NLW Upload.IA
            </span>
            <Separator className="h-6" orientation="vertical" />
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Github
            </Button>
          </div>
        </div>

        <main className="flex-1 p-6 flex gap-6">
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea
                className="resize-none p-4 leading-relaxed"
                placeholder="Inclua o prompt para a IA..."
              />
              <Textarea
                className="resize-none p-4 leading-relaxed"
                placeholder="Resultado gerado pela IA..."
                readOnly
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Lembre-se você pode utilizar a variável
              <code className="text-cyan-400">{"{transcription}"}</code> no seu
              prompt para adicionar o conteúdo da transcrição do seu video
              selecionado.
            </p>
          </div>

          <aside className="w-80 space-y-6">
            <form className="space-y-6">
              <label
                className="border flex cursor-pointer rounded-md aspect-video border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
                htmlFor="video"
              >
                <FileVideo className="w-4 h-4" />
                Selecione um video
              </label>
              <input
                type="file"
                id="video"
                accept="video/mp4"
                className="sr-only"
              />

              <Separator />

              <div className=" space-y-2">
                <Label htmlFor="transcription_prompt">
                  Prompt de transcrição
                </Label>
                <Textarea
                  placeholder="Inclua palavras-chave mencionadas no video separadas pro vírgula ( , )"
                  className="h-20 resize-none overflow-hidden leading-relaxed"
                  id="transcription_prompt"
                />
              </div>

              <Button type="submit" className="w-full">
                Carregar video
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <Separator />

            <form className="space-y-4">
              <div className="space-y-2">
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="youtube">Titulo do youtube</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Modelo</Label>
                <Select disabled defaultValue="gpt-3.5">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className="block text-xs text-muted-foreground italic">
                  Você poderá customizar essa opção em breve
                </span>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Temperatura</Label>

                <Slider min={0} max={1} step={0.1} />

                <span className="block text-xs text-muted-foreground italic leading-relaxed">
                  Valores mais altos tendem adeixar o resultado mais criativo
                  porém com possiveis erros.
                </span>
              </div>

              <Separator />

              <Button type="submit" className="w-full">
                Executar
                <Wand2 className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </aside>
        </main>
      </div>
    </>
  );
}
